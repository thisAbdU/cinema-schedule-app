package main

import (
	"cinema-schedule-backend/delivery/controller"
	"cinema-schedule-backend/delivery/router"
	"cinema-schedule-backend/repositories"
	"cinema-schedule-backend/services"
	"log"
	"net/http"
	"os"


	"github.com/gin-gonic/gin"
	"github.com/hasura/go-graphql-client"
	// "github.com/joho/godotenv"
	// "path/filepath"
)

type hasuraAuthTransport struct {
	AdminSecret string
	Transport   http.RoundTripper
}

// RoundTrip adds the x-hasura-admin-secret header to every request
func (h *hasuraAuthTransport) RoundTrip(req *http.Request) (*http.Response, error) {
	req.Header.Set("x-hasura-admin-secret", h.AdminSecret)
	return h.Transport.RoundTrip(req)
}

// func init() {
//     // Construct the path to the .env file in the root folder
//     rootPath, _ := filepath.Abs("../.env")
//     err := godotenv.Load(rootPath)
//     if err != nil {
//         log.Fatalf("Error loading .env file: %v", err)
//     }
// }

func main() {
	route := gin.New()
	route.Use(gin.Logger())
	adminSecret := os.Getenv("HASURA_GRAPHQL_ADMIN_SECRET")
	hasuraEndpoint := os.Getenv("HASURA_GRAPHQL_ENDPOINT")

	httpClient := &http.Client{
		Transport: &hasuraAuthTransport{
			AdminSecret: adminSecret,
			Transport:   http.DefaultTransport,
		},
	}

	client := graphql.NewClient(hasuraEndpoint, httpClient)

	userRepository := repositories.NewUserRepository(client)
	userService := services.NewUserService(userRepository)

	authController := controller.NewAuthController(userService)

	router.CreateAuthRoutes(route, authController)

	if err := route.Run(":" + os.Getenv("PORT")); err != nil {
		log.Fatal(err)
	}

	log.Println("Server started on port:", os.Getenv("PORT"))
}
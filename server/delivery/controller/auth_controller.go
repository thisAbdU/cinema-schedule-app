package controller

import (
	"cinema-schedule-backend/domain"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

type AuthController struct {
	userService domain.UserServiceInterface
}

func NewAuthController(service domain.UserServiceInterface) *AuthController {
	return &AuthController{userService: service}
}

func (c *AuthController) Register(ctx *gin.Context) {
	var newUser domain.User

	if err := ctx.ShouldBindJSON(&newUser); err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	_, err := c.userService.SignUp(newUser)
	if err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	ctx.IndentedJSON(http.StatusOK, gin.H{"message" : "User has been successfully registered"})
}

func (c *AuthController) Login(ctx *gin.Context) {
	var loginUser domain.LoginDto

	log.Println("== This is insie cntorller login user", loginUser)

	if err := ctx.ShouldBindJSON(&loginUser); err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}

	// Log the loginUser after binding
	log.Println("Logged in user data:", loginUser)

	user, err := c.userService.Login(loginUser.Username, loginUser.Password)
	if err != nil {
		ctx.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}
	
	ctx.IndentedJSON(http.StatusOK, gin.H{"message": "Login successful", "accessToken": user.AccessToken})
}
package router

import (
	"cinema-schedule-backend/delivery/controller"
	"log"

	"github.com/gin-gonic/gin"
)

func CreateAuthRoutes(router *gin.Engine, controller *controller.AuthController) {
	log.Println("Router has beeen called")
	router.POST("auth/login", controller.Login)
	router.POST("auth/register", controller.Register)
}

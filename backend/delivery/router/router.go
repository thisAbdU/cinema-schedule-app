package router

import (
	"cinema-schedule-backend/delivery/controller"

	"github.com/gin-gonic/gin"
)

func CreateAuthRoutes(router *gin.Engine, controller *controller.AuthController) {
	router.POST("auth/login", controller.Login)
	router.POST("auth/register", controller.Register)
}

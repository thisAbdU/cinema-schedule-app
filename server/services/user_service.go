package services

import (
	"cinema-schedule-backend/domain"
	"cinema-schedule-backend/utils"
	"errors"
	"log"
)

type UserService struct {
	repo domain.UserRepositoryInterface
}

func NewUserService(repo domain.UserRepositoryInterface) *UserService {
	return &UserService{
		repo: repo,
	}
}

func (s *UserService) SignUp(user domain.User) (domain.UserDto, error) {
	log.Println("service is also called")
	if len(user.Password) < 7 {
		return domain.UserDto{}, errors.New("password must be at least 7 characters long")
	}
	hashedPassword, err := utils.HashPassword(user.Password)
	if err != nil {
		return domain.UserDto{}, err
	}
	user.Password = string(hashedPassword)
	user, err = s.repo.CreateUser(user)
	if err != nil {
		return domain.UserDto{}, err
	}
	accessToken, err := utils.GenerateToken(user.ID, user.Role)
	if err != nil {
		return domain.UserDto{}, err
	}
	return domain.UserDto{User: user, AccessToken: accessToken}, nil
}

func (s *UserService) Login(username string, password string) (domain.UserDto, error) {
	user, err := s.repo.GetUser(username)
	if err != nil {
		log.Println("error inside the service", err)
		return domain.UserDto{}, err
	}

	err = utils.IsPasswordCorrect(password, user.Password)
	
	if err != nil {
		return domain.UserDto{}, err
	}
	accessToken, err := utils.GenerateToken(user.ID, user.Role)
	if err != nil {
		return domain.UserDto{}, err
	}

	return domain.UserDto{User: user, AccessToken: accessToken}, nil
}
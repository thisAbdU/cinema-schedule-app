package domain

type User struct {
	ID        int    `json:"id" graphql:"id"`
	Username  string `json:"last_name" graphql:"username"`
	Email     string `json:"email" graphql:"email"`
	Password  string `json:"password" graphql:"password"`
	Role      string `json:"role" default:"user" graphql:"role"`
}

type UserServiceInterface interface {
	SignUp(user User) (UserDto, error)
	Login(email string, password string) (UserDto, error)
}

type UserRepositoryInterface interface {
	CreateUser(user User) (User, error)
	GetUser(email string) (User, error)
}
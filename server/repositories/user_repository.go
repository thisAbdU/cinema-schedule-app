package repositories

import (
	"cinema-schedule-backend/domain"
	"context"
	"errors"
	"log"

	"github.com/hasura/go-graphql-client"
)

type UserRepository struct {
	client *graphql.Client
}

func NewUserRepository(client *graphql.Client) *UserRepository {
	return &UserRepository{
		client: client,
	}
}

func (r *UserRepository) CreateUser(user domain.User) (domain.User, error) {
	log.Println("Repository is also called")
	var m struct {
		InsertUser domain.User `graphql:"insert_users_one(object: {email: $email, password: $password, username: $username})"`
	}

	variables := map[string]interface{}{
		"email":      user.Email,
		"password":   user.Password,
		"username":   user.Username,
	}

	err := r.client.Mutate(context.Background(), &m, variables)
	
	if err != nil {
		log.Printf("Error occurred during user creation: %v", err)
		return domain.User{}, err
	}
	

	return m.InsertUser, nil
}

func (r *UserRepository) GetUser(username string) (domain.User, error) {
	var q struct {
		Users []domain.User `graphql:"users(where: {username: {_eq: $username}})"`
	}

	variables := map[string]interface{}{
		"username": username,
	}
	err := r.client.Query(context.Background(), &q, variables)
	if err != nil {
		return domain.User{}, err
	}
	
	log.Printf("Executing GraphQL query for user: %s", username)
	log.Printf("GraphQL Variables: %+v", variables)

	if len(q.Users) == 0 {
		log.Println("quuser", q.Users)
		return domain.User{}, errors.New("user not found")
	}

	return q.Users[0], nil
}
package repositories

import (
	"cinema-schedule-backend/domain"
	"context"
	"errors"

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
	var m struct {
		InsertUser domain.User `graphql:"insert_users_one(object: {email: $email, password: $password, first_name: $first_name, last_name: $last_name})"`
	}

	variables := map[string]interface{}{
		"email":      user.Email,
		"password":   user.Password,
		"username":   user.Username,
	}

	err := r.client.Mutate(context.Background(), &m, variables)

	if err != nil {
		return domain.User{}, err
	}

	return m.InsertUser, nil
}

func (r *UserRepository) GetUser(email string) (domain.User, error) {
	var q struct {
		Users []domain.User `graphql:"users(where: {email: {_eq: $email}})"`
	}
	variables := map[string]interface{}{
		"email": email,
	}
	err := r.client.Query(context.Background(), &q, variables)
	if err != nil {
		return domain.User{}, err
	}
	
	if len(q.Users) == 0 {
		return domain.User{}, errors.New("user not found")
	}

	return q.Users[0], nil
}
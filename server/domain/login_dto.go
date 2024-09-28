package domain

// LoginDto represents the data transfer object for user login.
type LoginDto struct {
	Username string `json:"username" graphql:"username"` 
	Password string `json:"password" graphql:"password"` 
}

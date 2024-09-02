package requests

type RegisterRequest struct {
	Username string `json:"username" binding:"required,min=6"`
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required,min=8"`
}

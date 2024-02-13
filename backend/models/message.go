package models

type Message struct {
	SenderID    string `json:"senderID" binding:"required"`
	RecipientID string `json:"recipientID" binding:"required"`
	Text        string `json:"text" binding:"required"`
}

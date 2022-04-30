package main

import (
	"github.com/gin-gonic/gin"

	"pierovalencia.com/periodic-table-ws/data"
)

func main() {
	r := gin.Default()
	r.GET("/elements", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.JSON(200, data.Elements)
	})
	r.GET("/families", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.JSON(200, data.Families)
	})
	r.Run()
}

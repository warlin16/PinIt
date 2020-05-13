package v1

import (
	"fmt"
	"net/http"
)

// TestHandlerForAPI test
func TestHandlerForAPI(w http.ResponseWriter, r *http.Request) {
	fmt.Println("You got this to work bro look!:", w)
	fmt.Fprintf(w, "If you're seeing this then you accessed the api my guy.")
}

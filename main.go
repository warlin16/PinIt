package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	http.Handle("/", r)
	r.HandleFunc("/test", testHandler)
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "If you're seeing this then good job.")
}

package main

import (
	"fmt"
	"log"
	"net/http"
	v1 "pinit/api/v1"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	api := r.PathPrefix("/api/").Subrouter()
	r.HandleFunc("/test", testHandler)
	api.HandleFunc("/test", v1.TestHandlerForAPI)
	r.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./static/index.html")
	})
	log.Println(fmt.Sprintf("Server running on http://localhost%s", ":8000"))
	err := http.ListenAndServe(":8000", r)
	if err != nil {
		log.Fatalf("could not run the server %v", err)
		return
	}
}

func testHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "If you're seeing this then good job.")
}

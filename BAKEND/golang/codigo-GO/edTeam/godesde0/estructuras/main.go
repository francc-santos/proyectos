package main

import "fmt"

func main() {

	type courses struct {
		Name      string
		Professor string
		Country   string
	}

	db := courses{
		Name:      "Bases de datos",
		Professor: "nose",
		Country:   "nose",
	}

	// css := courses{"css", "beto", "bolivia",}

	p := db
	p.Country = "colombia"

	d := &db
	(*d).Professor ="io"

	fmt.Printf("\n%+v" ,db)
	fmt.Print("\n")
	fmt.Printf("\n%+v" ,p.Country)
	fmt.Print("\n")
	fmt.Printf("\n%+v" ,d.Professor)
	fmt.Print("\n")

}

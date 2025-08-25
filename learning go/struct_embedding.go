package main

import "fmt"

type person struct {
	name string
	age  int
}

func (p person) greet() {
	fmt.Println(p.name)
}

type manager struct {
	person // this is embedded struct
	dept   string
}

func main() {
	m := manager{
		person: person{
			name: "Hridesh",
			age:  22,
		},
		dept: "engineering",
	}
	m.greet()
}

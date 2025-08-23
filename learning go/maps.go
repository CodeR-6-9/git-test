package main

import (
	"fmt"
)

func main() {
	m := make(map[int]string)
	m[0] = "hey"
	m[3] = "bro"
	val, check := m[3]
	fmt.Println(m[0])
	clear(m)
	fmt.Println(m)
	fmt.Println(val, " ", check)

}

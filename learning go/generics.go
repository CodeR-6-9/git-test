package main

import "fmt"

type Number interface {
	int | float32 | string
}

func add[t Number](a t, b t) t {
	return a + b
}
func main() {
	fmt.Println("hi", "hridesh")
	fmt.Println(2, 3)
}

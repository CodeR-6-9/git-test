package main

import "fmt"

func plusminus(a int, b int) (int, int) {
	return a + b, a - b
}
func main() {
	a := 1
	b := 2
	x, y := plusminus(a, b)
	fmt.Println(x, y)
}

package main

import "fmt"

func main() {
	var a [5]int
	for i := 0; i < 5; i++ {
		a[i] = 100 + i
	}
	fmt.Println(a)

	var b [2][3]int
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			fmt.Println(b[i][j])
		}
	}
	b[0][0] = 1
	fmt.Println(b[0])
}

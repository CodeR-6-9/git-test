package main

import "fmt"

func main() {
	var a [5]int
	for i := 0; i < 5; i++ {
		a[i] = 100 + i
	}

	b := a[0:3]
	fmt.Println(b)

	var c []string
	c = append(c, "hi", "bye")
	fmt.Println(c)

	d := make([]string, 3)
	d[0] = "first"
	d = append(d, "fourth")
	fmt.Println(d)
}

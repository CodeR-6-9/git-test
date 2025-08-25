package main

import "fmt"

// The interface (the contract)
type shape interface {
	printthis() int
}

type temp1 struct {
	radius int
}

type temp struct {
	radius int
}

// This method makes temp1 a 'shape
func (t temp1) printthis() int {
	fmt.Println("This is temp1 printing. Radius:", t.radius)
	return t.radius
}
func (t temp) printthis() int {
	fmt.Println("This is temp printing. Radius:", t.radius)
	return t.radius
}

// This is a generic function that can accept any shape
func doSomethingWithShape(s shape) {
	fmt.Println("--- Inside generic function ---")
	s.printthis()
	fmt.Println("---------------------------")
}

func main() {
	c := temp1{radius: 10}
	d := temp{radius: 20}

	c.printthis()
	d.printthis()

	doSomethingWithShape(c)
	doSomethingWithShape(d)
}

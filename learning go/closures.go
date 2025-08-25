package main

import "fmt"

func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}
func main() {
	a := adder()
	a(3)
	a(4)
	fmt.Println(a(2))

}

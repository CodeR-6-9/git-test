package main

import (
	"errors"
	"fmt"
)

func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("problem detected")
	}
	return a / b, nil
}
func main() {
	val, err := divide(3.0, 0)
	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(val)
	}
}

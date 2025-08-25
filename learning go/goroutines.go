package main

import (
	"fmt"
	"time"
)

func temp() {
	for i := 0; i < 5; i++ {
		fmt.Println(i + 1)
		time.Sleep(100 * time.Millisecond)
	}
}
func main() {
	go temp()
	for i := 0; i < 5; i++ {
		fmt.Println(string(rune('a' + i)))
		time.Sleep(100 * time.Millisecond)
	}

}

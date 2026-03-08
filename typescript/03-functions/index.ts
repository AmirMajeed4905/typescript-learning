
// Parameter type + return type
function add(a: number, b: number): number {
  return a + b
}

// Kuch return nahi karta — void
function greet(name: string): void {
  console.log(`Hello ${name}`)
}

console.log(add(5, 3))   // 8
greet("Amir")            // Hello Amir

// Optional Parameters in Functions

// ? = optional hai — dena zaroori nahi
function createUser(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old`
  }
  return `${name} joined`
}

console.log(createUser("Amir", 25))  // Amir is 25 years old
console.log(createUser("Ahmed")) 



// Default value — nahi diya toh ye use hoga
function greetUser(name: string, role: string = "user"): string {
  return `${name} is a ${role}`
}

console.log(greetUser("Amir", "admin"))  // Amir is a admin
console.log(greetUser("Ahmed"))          // Ahmed is a user




// Normal function
function multiply(a: number, b: number): number {
  return a * b
}

// Same — arrow function
const multiply2 = (a: number, b: number): number => {
  return a * b
}

// Short — ek line
const multiply3 = (a: number, b: number): number => a * b

console.log(multiply(3, 4))   // 12
console.log(multiply2(3, 4))  // 12
console.log(multiply3(3, 4))  // 12




// ...nums = jitne bhi numbers do
function sumAll(...nums: number[]): number {
  return nums.reduce((total, num) => total + num, 0)
}

console.log(sumAll(1, 2, 3))        // 6
console.log(sumAll(1, 2, 3, 4, 5))  // 15


// Same function — alag alag types ke liye
function format(value: string): string
function format(value: number): string
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase()
  }
  return value.toFixed(2)
}

console.log(format("hello"))  // HELLO
console.log(format(3.14159))  // 3.14
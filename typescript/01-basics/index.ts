// // 01-basics/index.ts

// // ==================
// // 1. Basic Types
// // ==================

// // String type - stores text values
// let user: string = "Amir Majeed"

// // Number type - stores integers and decimals
// let age: number = 25
// let price: number = 99.99

// // Boolean type - stores true or false
// let isActive: boolean = true

// console.log("Name:", user)
// console.log("Age:", age)
// console.log("Price:", price)
// console.log("Active:", isActive)

// // ==================
// // 2. Union Type
// // ==================

// // Union - variable can hold more than one type
// let id: string | number = 101
// id = "ABC-101"   // both are valid
// console.log("ID:", id)

// // ==================
// // 3. Type Alias
// // ==================

// // Restricts value to only these options
// type UserRole = "admin" | "user" | "moderator"
// let role: UserRole = "admin"
// console.log("Role:", role)

// // ==================
// // 4. Arrays
// // ==================

// // Array of strings
// let skills: string[] = ["JavaScript", "TypeScript", "Node.js"]

// // Array of numbers
// let scores: number[] = [90, 85, 92]

// console.log("Skills:", skills)
// console.log("Scores:", scores)

// // ==================
// // 5. Any — avoid this!
// // ==================

// // 'any' removes type safety - avoid using it
// let something: any = "hello"
// something = 42       // no error but bad practice
// console.log("Any:", something)

// // ==================
// // 6. Null & Undefined
// // ==================

// // Variable that can be string or null
// let email: string | null = null
// console.log("Email before:", email)

// email = "amir@gmail.com"
// console.log("Email after:", email)


function reverseString(str: string): string {
  // Split → Reverse → Join
  return str.split("").reverse().join("")
}

// Ya manually
function reverseStringManual(str: string): string {
  let result = ""

  // Peeche se loop karo
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

console.log(reverseString("ali"))   // olleh
console.log(reverseString("Amir"))    // rimA
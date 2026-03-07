// 01-basics/index.ts

let name: string = "Amir Majeed"
let age: number = 25
 // TypeScript mein type check hota hai, toh yeh allowed hai
let isActive: boolean = true

// Ye lagao — terminal mein dikhega
console.log("Name:", name)
console.log("Age:", age)
console.log("Active:", isActive)

// Type check karo
type UserRole = "admin" | "user"
let role: UserRole = "admin"
console.log("your Role is :", role )
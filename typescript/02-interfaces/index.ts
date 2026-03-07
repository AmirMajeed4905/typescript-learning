// 02-interfaces/index.ts

// ==================
// 1. Basic Interface
// ==================

// Interface defines the shape of an object
interface User {
  id: number
  userName: string
  email: string
  age?: number        // optional field
  isActive: boolean
}

// Valid object — all required fields present
const user1: User = {
  id: 1,
  userName: "Amir Majeed",
  email: "amir@gmail.com",
  isActive: true
}

// Valid — with optional age field
const user2: User = {
  id: 2,
  userName: "Ahmed",
  email: "ahmed@gmail.com",
  age: 25,
  isActive: false
}

console.log("User 1:", user1)
console.log("User 2:", user2)

// ==================
// 2. Nested Interface
// ==================

// Separate interface for address
interface Address {
  city: string
  country: string
}

// User with nested address
interface UserWithAddress {
  id: number
  userName: string
  address: Address
}

const user3: UserWithAddress = {
  id: 3,
  userName: "Sara",
  address: {
    city: "Lahore",
    country: "Pakistan"
  }
}

console.log("City:", user3.address.city)
console.log("Country:", user3.address.country)

// ==================
// 3. Interface Extend
// ==================

// Base interface
interface Animal {
  name: string
  age: number
}

// Dog extends Animal — gets all Animal fields + its own
interface Dog extends Animal {
  breed: string
}

const dog: Dog = {
  name: "Bruno",
  age: 3,
  breed: "Labrador"
}

console.log("Dog:", dog)



// ==================
// 4. Readonly Fields
// ==================

interface Config {
  readonly apiUrl: string    // cannot be changed after set
  readonly appName: string
  version: string            // this can be changed
}

const config: Config = {
  apiUrl: "https://api.example.com",
  appName: "MyApp",
  version: "1.0.0"
}

// config.apiUrl = "changed"  // ❌ Error! readonly hai
config.version = "2.0.0"      // ✅ Version can be updated
console.log("Config:", config)

// ==================
// 5. Interface with Function
// ==================

interface Post {
  id: number
  title: string
  content: string

  // Function signature inside interface
  getPreview(): string
}

const post: Post = {
  id: 1,
  title: "TypeScript Basics",
  content: "TypeScript is a strongly typed language...",

  getPreview() {
    // Returns first 20 characters of content
    return this.content.slice(0, 20) + "..."
  }
}

console.log("Preview:", post.getPreview())

// ==================
// 6. Type vs Interface
// ==================

// Interface — for objects and classes
interface UserInterface {
  id: number
  userName: string
}

// Type — can be used for objects, unions, primitives, etc.
type UserType = {
  id: number
  userName: string
}


type StringOrNumber = string | number   // ✅ possible in type but not in interface
// interface StringOrNumber = string | number  // ❌ Interface cannot do this
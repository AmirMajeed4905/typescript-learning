// Bina generics — alag alag function
function getNumber(val: number): number { return val }
function getString(val: string): string { return val }

// Generics ke saath — ek hi function ✅
function getValue<T>(val: T): T { return val }

getValue(42)       // number
getValue("Amir")   // string
getValue(true)     // boolean




// ==================
// 1. Basic Generic
// ==================

function identity<T>(value: T): T {
  return value
}

console.log(identity(42))        // 42
console.log(identity("Amir"))    // Amir
console.log(identity(true))      // true

// ==================
// 2. Generic Array
// ==================

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}

console.log(getFirst([1, 2, 3]))          // 1
console.log(getFirst(["a", "b", "c"]))    // a

// ==================
// 3. Generic Interface
// ==================

interface ApiResponse<T> {
  data: T
  success: boolean
  message: string
}

// String response
const userResponse: ApiResponse<string> = {
  data: "Amir",
  success: true,
  message: "User found"
}

// Object response
interface User {
  id: number
  name: string
}

const userDataResponse: ApiResponse<User> = {
  data: { id: 1, name: "Amir" },
  success: true,
  message: "User fetched"
}

console.log("Response:", userResponse)
console.log("User Data:", userDataResponse)

// ==================
// 4. Generic Function with Interface
// ==================

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  // Simulate API call
  return {
    data: {} as T,
    success: true,
    message: "Data fetched from " + url
  }
}

// ==================
// 5. Multiple Generics
// ==================

function makePair<K, V>(key: K, value: V): { key: K, value: V } {
  return { key, value }
}

console.log(makePair("name", "Amir"))    // { key: 'name', value: 'Amir' }
console.log(makePair(1, true))           // { key: 1, value: true }

// ==================
// 6. Generic with Constraint
// ==================

// T must have a name property
function greetUser<T extends { name: string }>(user: T): string {
  return `Hello ${user.name}!`
}

console.log(greetUser({ name: "Amir", age: 25 }))   // Hello Amir!
console.log(greetUser({ name: "Ahmed", role: "admin" })) // Hello Ahmed!
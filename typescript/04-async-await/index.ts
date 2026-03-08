// 04-async-await/index.ts

// ==================
// 1. Promise Basic
// ==================

// Promise — future mein value aayegi
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  const success = true

  if (success) {
    resolve("Data aa gaya!")
  } else {
    reject("Error aa gaya!")
  }
})

myPromise
  .then(data => console.log(data))
  .catch(err => console.log(err))

// ==================
// 2. Async/Await
// ==================

// Async function hamesha Promise return karta hai
async function fetchUser(id: number): Promise<string> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  return `User ${id} found!`
}

// Async function call karo
async function main() {
  const user = await fetchUser(1)
  console.log(user)
}

main()

// ==================
// 3. Error Handling
// ==================

async function fetchData(url: string): Promise<string> {
  try {
    // Simulate API call
    if (!url) throw new Error("URL nahi di!")
    return `Data from ${url}`
  } catch (error) {
    throw new Error(`Error: ${error}`)
  }
}

async function getData() {
  try {
    const data = await fetchData("https://api.example.com")
    console.log(data)

    // Error wala case
    const data2 = await fetchData("")
    console.log(data2)
  } catch (error) {
    console.log("Caught:", error)
  }
}

getData()

// ==================
// 4. Multiple Async
// ==================

async function getUser(): Promise<string> {
  await new Promise(r => setTimeout(r, 500))
  return "Amir"
}

async function getPosts(): Promise<string[]> {
  await new Promise(r => setTimeout(r, 500))
  return ["Post 1", "Post 2"]
}

// Promise.all — dono ek saath chalao
async function loadPage() {
  const [user, posts] = await Promise.all([
    getUser(),
    getPosts()
  ])

  console.log("User:", user)
  console.log("Posts:", posts)
}

loadPage()
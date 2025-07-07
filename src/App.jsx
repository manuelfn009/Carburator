import { useState } from 'react'
import { Navbar } from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to Carburant Finder</h1>
        <p className="mt-2">Find the best fuel prices near you.</p>
      </main>
    </>
  )
}

export default App

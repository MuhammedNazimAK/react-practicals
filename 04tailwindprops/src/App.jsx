import { useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
    <Card username="nazim" btnText="Click me" />
    <Card username="nachu" />
    </>
  )
}

export default App

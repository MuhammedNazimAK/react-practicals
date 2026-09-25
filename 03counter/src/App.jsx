import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count === 20) return;
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  const removeValue = () => {
    if (count === 0) return;
    setCount(count - 1);
  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={addValue}>Add value: {count}</button>
      <button onClick={removeValue}>Remove value value: {count}</button>
    </>
  )
}

export default App

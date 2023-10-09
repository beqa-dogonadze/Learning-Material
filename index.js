import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const handleIncrease = () => {
    setCount(count + 1)
    document.body.style.backgroundColor = `rgb(0,${2},0)`
  }
  const handleDecrease = () => {
    setCount(count - 1)
    document.body.style.backgroundColor = 'red'
  }
  const handleReset = () => {
    setCount(0)
    document.body.style.backgroundColor = 'white'
  }

  return (
    <div>
      <div>Current number is {count}</div>
      <button onClick={handleIncrease}>Increasestyle</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default App

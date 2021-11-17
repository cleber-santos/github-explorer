import { useState } from 'react'

// sempre que uma função de react começa com "use", significa que ela é um hook (gancho)

export function Counter() {
  const [counter, setCounter] = useState (0)

  function increment() {
    setCounter (counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}
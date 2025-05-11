import { useState } from "react";

function App() {
  const [ counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1)
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1)
  }
  return (
    <>
      <h1>{counter}</h1>
      <div>
        <button onClick= {incrementCounter}> increment </button>
        <button onClick= {decrementCounter}> decrement </button>
      </div>
    </>
  )
}

export default App
import { useState } from "react";

export const Button = () => {
  const[number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number +1);
    }
  return (
    <button onClick={increment}>
      {number}
    </button>
  )
}



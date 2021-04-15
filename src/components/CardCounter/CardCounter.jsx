import React, { useState } from "react";
import styles from "./CardCounter.module.scss"

const CardCounter = () => {

  const [count, setCount] = useState(0)

  const increment = () => setCount(count +1)

  const decrement = () => setCount(count -1)



  return (

    <div className={styles.CardCount}> 
     <h2>Counter</h2>
     <p>{count}</p>
     <button onClick={decrement}>-</button>
     <button onClick={increment}>+</button>
    </div>
  )

}

export default CardCounter 
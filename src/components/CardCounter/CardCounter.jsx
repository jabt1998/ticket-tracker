import React, { useState } from "react";
import styles from "./CardCounter.module.scss"

const CardCounter = () => {

  const [count, setCount] = useState(0)

  const increment = () => setCount(count +1)

  const decrement = () => {
    if (count <= 0) {
     return 0
    } else {
      return setCount(count -1)
    }
  }

  



  return (

    <div className={styles.CardCount}> 
     <h2>Counter</h2>
     <p>{count}</p>
     <div className={styles.button}>
     <button onClick={decrement}>-</button>
     <button onClick={increment}>+</button>
     </div>
    </div>
  )

}

export default CardCounter 
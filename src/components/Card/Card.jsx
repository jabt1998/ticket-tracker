import React from "react";
import styles from "./Card.module.scss";
import CardCounter from "../CardCounter"

const Card = (props) => {
  
 const { name, role } = props
 
return (
  <div className={styles.wholeCard}>
   <div className={styles.mainCard}>
    <h2>{name}</h2>
    <h3>{role}</h3>
    <div className={styles.theCardCounter}>
     <CardCounter />
    </div>
   </div>
  </div>
)
}

;

export default Card
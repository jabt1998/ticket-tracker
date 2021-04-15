import React from "react";
import styles from "./Card.module.scss";


const Card = (props) => {
  
 

 const { name, role } = props
 





return (
  <div className={styles.mainCard}>
    <h2>{name}</h2>
    <h3>{role}</h3>
  </div>
)
}

;

export default Card
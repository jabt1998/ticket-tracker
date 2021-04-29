import React from "react";
import Card from "./components/Card";
import teamData from "./data/team";
import styles from "./App.module.scss";
import './App.css';

const App = () => {
       
 const mappingData = teamData.map((teamDatas) => {
   return <Card name={teamDatas.name} role={teamDatas.role}/>
 })

 return (
  <>
   <h1>Ticket Tracker</h1>
    
   <div className={styles.main}>{mappingData}</div>
  </>
  
 )
 }
    
export default App;

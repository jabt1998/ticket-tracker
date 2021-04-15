import React from "react";
import Card from "./components/Card";
import teamData from "./data/team"
import './App.css';

const App = () => {
       
 const mappingData = teamData.map((teamDatas) => {
   return <Card name={teamDatas.name} role={teamDatas.role}/>
 })

 return (
  <> 
    <h1>Hello</h1>
   <div>{mappingData}</div>
  </>
 )
 }
    
export default App;

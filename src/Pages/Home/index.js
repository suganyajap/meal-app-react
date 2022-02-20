import React from 'react'
import MyHeader from '../../components/Header'
import { useEffect,useState } from 'react';
import axios from 'axios';
import MealsContainer from '../../components/MealsContainer';
function Home() {
    const [meals,setMeals]=useState([]);
    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(({data})=>setMeals(data.meals))
        .then((error)=>console.log(error));
      },[]);  
  return (
      <div>
    <MyHeader />
    <MealsContainer meals={meals} />
    </div>
  )
}

export default Home
import React from 'react'
import MyHeader from '../../components/Header'
import { useEffect,useContext } from 'react';
// import axios from 'axios';
import MealsContainer from '../../components/MealsContainer';
import { MyContext } from '../../Context';
function Home() {
   const {meals,setMeals}=useContext(MyContext);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((res)=>res.json())
        .then((data)=>{
          setMeals(data.meals)
        })
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
import axios from 'axios';
import React, { useState ,useContext} from 'react'
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import { MyContext } from '../../Context';
import './styles.css';
function MyHeader() {
  const [searchInput,setSearchInput]=useState(""); 
  const {setMeals}=useContext(MyContext);
  function handleSearch(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(({data})=>setMeals(data.meals))
  }
  return (
    <div className='my-header'>
        <h1>Welcome</h1>
        <h2>You can search your favourite Meals</h2>
        <div className='input-button'>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="search for a meal"
      aria-label="Meal Search input"
      aria-describedby="meal-search-button"
      value={searchInput}
      onChange={(event)=>setSearchInput(event.target.value)}
    />
   <Button variant="danger" id="meal-search-button" onClick={handleSearch}>Search</Button>
  </InputGroup>
        </div>
    </div>
  )
}

export default MyHeader

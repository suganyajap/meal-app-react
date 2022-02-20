import React from 'react'
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import './styles.css';
function MyHeader
() {
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
    />
   <Button variant="danger" id="meal-search-button">Search</Button>
  </InputGroup>
        </div>
    </div>
  )
}

export default MyHeader

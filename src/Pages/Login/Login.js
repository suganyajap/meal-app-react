import axios from 'axios';
import React, { useContext, useState } from 'react';
import {Form,Button} from 'react-bootstrap';
import { MyContext } from '../../Context';

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const {setUser}=useContext(MyContext);
  function handleLogin(e){
    e.preventDefault();
   if(!email || !password){
     return alert('Please fill out fields')
   }
   axios.post('http://localhost:9000/login',{email,password})
   .then(({data})=>setUser(data))
   .catch((error)=>console.log(error));
  }
  return (
    <Form onSubmit={handleLogin}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email} required />
      
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
    </Form.Group>
    <Button variant="primary" type="submit">
      Login
    </Button>
  </Form>
  );
}

export default Login
import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { Button } from '../ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Link } from 'react-router-dom';

function Signup() {
  
  const [input,setInput]=useState({
    name:"",
    username:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });
  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const changeFileHandler= (e)=>{
    setInput({...input,file:e.target.files?.[0]});
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    console.log(input);
  }
  return (
   <>
   <Navbar/>
   <div className='flex items-center justify-center max-2-7xl mx-auto'>
    <form onSubmit={submitHandler} className='w-1/3 border border-gray-200 rounded-md p-4 my-10'>
        <h1 className='font-bold text-xl mb-5'>Signup</h1>
        <div className='my-2'>
            <Label className='my-1'>Name</Label>
            <Input 
            type="text"
            name="name"
            value={input.name}
            onChange={changeEventHandler}
            placeholder="John Doe"/>
        </div>
        <div className='my-2'>
            <Label className='my-1'>Username</Label>
            <Input 
            type="text"
            name="username"
            value={input.username}
            onChange={changeEventHandler}
            placeholder="johndoe123"/>
        </div>
        <div className='my-2'>
            <Label className='my-1'>Email</Label>
            <Input 
            type="email"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
            placeholder="johndoe@gmail.com"/>
        </div>
        <div className='my-2'>
            <Label className='my-1'>PhoneNumber</Label>
            <Input 
            type="phoneNumber"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={changeEventHandler }
            placeholder="+91 9876543210"/>
        </div>
        <div>
            <Label className="my-1">Password</Label>
            <Input 
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Password"/>
        </div>
       <div className='flex items-center justify-center my-2'>
       
 <RadioGroup className="flex items-center justify-between">
  <div className='flex items-center space-x-2'>
  <Input
  type="radio"
  name="role"
  value="patient"
  checked={input.role==='patient'}
  onChange={changeEventHandler}
  className="cursor-pointer"
  />
    <Label htmlFor="r1" >Patient</Label>
  </div>
  <div className='flex items-center space-x-2'>
  <Input
  type="radio"
  name="role"
  value="doctor"
  checked={input.role==='doctor'}
  onChange={changeEventHandler}
  className="cursor-pointer"
  />
    <Label htmlFor="r2" >Doctor</Label>
  </div>
  <div className='flex items-center space-x-2'>
  <Input
  type="radio"
  name="role"
  value="admin"
  checked={input.role==='admin'}
  onChange={changeEventHandler}
  className="cursor-pointer"
  />
    <Label htmlFor="r3" >Admin</Label>
  </div>
 </RadioGroup>
 
</div>
<div className="my-2">
  <Label className="my-1"> Profile</Label>
  <Input accept='image/*'
  type="file"
  onChange={changeFileHandler}
  className=" cursor-pointer"
  />
 </div>
 <Button type="submit" className="w-full my-4 bg-black text-white">Signup</Button>
 <span>Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
    </form>
   </div>
   </>
  )
}

export default Signup;
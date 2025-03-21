import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { Button } from '../ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '../utils/constant';
import { toast } from 'sonner';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader, Loader2 } from 'lucide-react';

function Login() {
const [input,setInput]=useState({
   username:"",
    password:"",
    role:""
  });
  const {loading}= useSelector(store=>store.auth);
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  
  const submitHandler=async(e)=>{
    e.preventDefault();
 
    
  try{
    dispatch((setLoading(true)));
    const res=  await axios.post(`${USER_API_END_POINT}/login`,input,{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true,
    });
    
   if(res.data.token){

    navigate("/");
    toast.success(res.data.message);
   }
  }catch(error){
console.log(error);
  }finally{
    dispatch(setLoading(false));
  }
  
  }

  return (
   <>
   <Navbar/>
   <div className='flex items-center justify-center max-2-7xl mx-auto'>
    <form onSubmit={submitHandler} className='w-1/3 border border-gray-200 rounded-md p-4 my-10'>
    <h1 className='font-bold text-xl mb-5'>Login</h1>
        <div className='my-2'>
            <Label className='my-1'>Username</Label>
            <Input 
            type="text"
            name="username"
            value={input.username}
            onChange={changeEventHandler}
            placeholder="johndoe123"/>
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
  id="r1"
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
  id="r2"
  name="role"
  value="doctor"
  checked={input.role==='doctor'}
  onChange={changeEventHandler}
  className="cursor-pointer"
  />
    <Label htmlFor="r2" >Doctor</Label>
  </div>
  
 </RadioGroup>
 
</div>
{
loading? <Button className= "w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please wait</Button>: <Button type="submit" className="w-full my-4 bg-black text-white">Login</Button>
}

 <span>Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link></span>
    </form>
   </div>
   </>
  )
}

export default Login;
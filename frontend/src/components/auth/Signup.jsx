

import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { RadioGroup } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';

function Signup() {
  const [input, setInput] = useState({
    name: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: '',
    file: '',
    // Doctor-specific fields
    specialization: '',
    licenseNumber: '',
    // Patient-specific fields
    DOB: '',
    gender: '',
    contactPhone: '',
    contactAddress: '',
  });

  const loading = useSelector((store) => store.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle text input changes
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', input.name);
    formData.append('username', input.username);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('password', input.password);
    formData.append('role', input.role || '');

    if (input.file) {
      formData.append('file', input.file);
    }

    // Append additional fields based on role
    if (input.role === 'doctor') {
      formData.append('specialization', input.specialization);
      formData.append('licenseNumber', input.licenseNumber);
    } else if (input.role === 'patient') {
      formData.append('DOB', input.DOB);
      formData.append('gender', input.gender);
      formData.append('contactPhone', input.contactPhone);
      formData.append('contactAddress', input.contactAddress);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/3 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Signup</h1>

          {/* Name */}
          <div className="my-2">
            <Label className="my-1">Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
              placeholder="John Doe"
            />
          </div>

          {/* Username */}
          <div className="my-2">
            <Label className="my-1">Username</Label>
            <Input
              type="text"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
              placeholder="johndoe123"
            />
          </div>

          {/* Email */}
          <div className="my-2">
            <Label className="my-1">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="johndoe@gmail.com"
            />
          </div>

          {/* Phone Number */}
          <div className="my-2">
            <Label className="my-1">Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="+91 9876543210"
            />
          </div>

          {/* Password */}
          <div>
            <Label className="my-1">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Password"
            />
          </div>

          {/* Role Selection */}
          <div className="flex items-center justify-center my-2">
            <RadioGroup className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="r1"
                  name="role"
                  value="patient"
                  checked={input.role === 'patient'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Patient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  id="r2"
                  name="role"
                  value="doctor"
                  checked={input.role === 'doctor'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Doctor</Label>
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

          {/* Doctor Fields */}
          {input.role === 'doctor' && (
            <>
              <div className="my-2">
                <Label className="my-1">Specialization</Label>
                <Input
                  type="text"
                  name="specialization"
                  value={input.specialization}
                  onChange={changeEventHandler}
                  placeholder="Cardiology"
                />
              </div>
              <div className="my-2">
                <Label className="my-1">License Number</Label>
                <Input
                  type="text"
                  name="licenseNumber"
                  value={input.licenseNumber}
                  onChange={changeEventHandler}
                  placeholder="12345-XYZ"
                />
              </div>
            </>
          )}

          {/* Patient Fields */}
          {input.role === 'patient' && (
            <>
              <div className="my-2">
                <Label className="my-1">Date of Birth</Label>
                <Input
                  type="date"
                  name="DOB"
                  value={input.DOB}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="my-2">
                <Label className="my-1">Gender</Label>
                <Input
                  type="text"
                  name="gender"
                  value={input.gender}
                  onChange={changeEventHandler}
                  placeholder="Male/Female"
                />
              </div>
              
              <div className="my-2">
                <Label className="my-1">Contact Address</Label>
                <Input
                  type="text"
                  name="contactAddress"
                  value={input.contactAddress}
                  onChange={changeEventHandler}
                  placeholder="Street, City"
                />
              </div>
            </>
          )}

          {/* Signup Button */}
          <Button type="submit" className="w-full my-4 bg-black text-white">
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            Signup
          </Button>

          <span>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Signup;

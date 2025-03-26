
// import React, { useState } from 'react';
// import Navbar from '../shared/Navbar';
// import { Input } from '../ui/input';
// import { Label } from '../ui/label';
// import { Button } from '../ui/button';
// import { RadioGroup } from '../ui/radio-group';
// import { Link, useNavigate } from 'react-router-dom';
// import { USER_API_END_POINT } from '../utils/constant';
// import { toast } from 'sonner';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLoading } from '@/redux/authSlice';
// import { setUser } from '@/redux/userSlice';
// import { Loader2 } from 'lucide-react';

// function Login() {
//   const [input, setInput] = useState({
//     username: '',
//     password: '',
//     role: '',
//   });

//   const { loading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Handle input change
//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (!input.username || !input.password || !input.role) {
//       toast.error('Please fill all fields');
//       return;
//     }

//     try {
//       dispatch(setLoading(true));
      
//       const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       });

//       if (res.data.token) {
//         // Store user data in Redux
//         dispatch(setUser(res.data.user));
//         toast.success(res.data.message);

//         // Redirect based on role
//         if (res.data.user.role === 'patient') {
//           navigate('/dashboard');
//         } else if (res.data.user.role === 'doctor') {
//           navigate('/doctor-dashboard');
//         }
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       toast.error(error.response?.data?.message || 'Login failed');
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <form
//           onSubmit={submitHandler}
//           className="w-1/3 border border-gray-200 rounded-md p-4 my-10"
//         >
//           <h1 className="font-bold text-xl mb-5">Login</h1>

//           {/* Username */}
//           <div className="my-2">
//             <Label className="my-1">Username</Label>
//             <Input
//               type="text"
//               name="username"
//               value={input.username}
//               onChange={changeEventHandler}
//               placeholder="johndoe123"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <Label className="my-1">Password</Label>
//             <Input
//               type="password"
//               name="password"
//               value={input.password}
//               onChange={changeEventHandler}
//               placeholder="Password"
//             />
//           </div>

//           {/* Role Selection */}
//           <div className="flex items-center justify-center my-2">
//             <RadioGroup className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   id="r1"
//                   name="role"
//                   value="patient"
//                   checked={input.role === 'patient'}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r1">Patient</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   id="r2"
//                   name="role"
//                   value="doctor"
//                   checked={input.role === 'doctor'}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r2">Doctor</Label>
//               </div>
//             </RadioGroup>
//           </div>

//           {/* Login Button */}
//           {loading ? (
//             <Button className="w-full my-4 bg-gray-500" disabled>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Please wait
//             </Button>
//           ) : (
//             <Button type="submit" className="w-full my-4 bg-black text-white">
//               Login
//             </Button>
//           )}

//           {/* Signup Link */}
//           <span>
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-600">
//               Signup
//             </Link>
//           </span>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
import React, { useState } from 'react';
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
import { setUser } from '@/redux/userSlice';
import { setDoctor } from '@/redux/doctorSlice';
import { Loader2 } from 'lucide-react';

function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    role: '',
  });

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!input.username || !input.password || !input.role) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      dispatch(setLoading(true));
      
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (res.data.token) {
        toast.success(res.data.message);

        // ✅ If role = patient → Store in userSlice
        if (res.data.user.role === 'patient') {
          dispatch(setUser(res.data.user));
          navigate('/dashboard');
        } 
        
        // ✅ If role = doctor → Store in doctorSlice
        else if (res.data.user.role === 'doctor') {
          dispatch(setDoctor(res.data.user));
          navigate('/doctor-dashboard');
          console.log("Doctor logged in:", res.data.user); // ✅ Debugging
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/3 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>

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

          {/* Login Button */}
          {loading ? (
            <Button className="w-full my-4 bg-gray-500" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4 bg-black text-white">
              Login
            </Button>
          )}

          {/* Signup Link */}
          <span>
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;

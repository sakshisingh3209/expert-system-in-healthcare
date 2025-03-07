import react, { useState } from "react"
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from "../ui/select";
import { Card,CardContent,CardHeader,CardTitle } from "../ui/card";
import {FaUser,FaPhone,FaLock} from "react-icons/fa";
import {MdEmail, MdWork} from "react-icons/md"
import { Link } from "react-router-dom";

const Signup= ()=>{
    const[formData,setFormData]= useState({
        name:"",
        username:"",
        phoneNumber:"",
        role:"",
        password:""
    });



    const [errors,setErrors]=useState({});
    const[existingUser,setExistingUser] =useState(false);

const checkIfUserExists=(username)=>{
    const existingUsers=["testuser","adin123"];
    return existingUser.includes(username);
};
const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
    setErrors({...errors,[e.target.name]:""});
};
const handleSubmit=(e)=>{
    e.preventDefault();
    let newErrors={};
    if(!formData.name) newErrors.name="Name is required";
    if(!formData.username) newErrors.username="Username is required";
    if(!formData.phoneNumber) newErrors.phoneNumber= "Phone Number is required";
    if(!formData.role) newErrors.role="Role selection is required";
    

    if(checkIfUserExists(formData.username)){
        setExistingUser(true);
        return;

    }else{
        setExistingUser(false);
    }


    if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
        return;
    }
console.log("User registered: ",formData);
alert("Signup successful!");
}

    return (
    <div  className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-full max-w-md shadow-lg p-6 bg-white rounded-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-800">Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <Label htmlFor="name">Name</Label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-500-500"/>
                            <Input id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="pl-10"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        {errors.name && <p className="text-red-500 tex-sm">{errors.name}   </p>}
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="name">Username</Label>
                        <div className="relative">
                            <FaUser className="absolute left-3 top-3 text-gray-500-500"/>
                            <Input id="username"
                            name="username"
                            type="text"
                            placeholder="Enter a username"
                            className="pl-10"
                            value={formData.username}
                            onChange={handleChange}
                            />
                        </div>
                        {errors.username && <p className="text-red-500 tex-sm">{errors.username}   </p>}
                        {existingUser && <p className="text-red-500 text-sm"> Username already exists </p>}
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="name">Phone Number</Label>
                        <div className="relative">
                            <FaPhone className="absolute left-3 top-3 text-gray-500-500"/>
                            <Input id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            placeholder="Enter your phoneNumber"
                            className="pl-10"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            />
                        </div>
                        {errors.phoneNumber && <p className="text-red-500 tex-sm">{errors.phoneNumber}   </p>}
                    </div>

                    <div className="mb-4">
              <Label>Select Role</Label>
              <div className="relative">
                <MdWork className="absolute left-1 top-3 text-gray-500" />
                <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>
                    <div className="mb-4">
                        <Label htmlFor="name">Password</Label>
                        <div className="relative">
                            <FaLock className="absolute left-3 top-3 text-gray-500-500"/>
                            <Input id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            className="pl-10"
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </div>
                    </div>
                    <Button className="w-full bg-blue-600 text-black hover:bg-blue-700">Sign Up</Button>
                    <p className="text-center text-sm text-gray-600 mt-4">Already have an account? {" "}
                        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                     </p>
                </form>
            </CardContent>
            </Card>
    </div>
    );
};
export default Signup
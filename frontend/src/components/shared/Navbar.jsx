import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { AvatarImage } from "../ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { LogOut, User2 } from "lucide-react";

function Navbar() {
    const user= false;
  return (
    <div className="bg-white  ">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            Expert Healthcare
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex font-medium items-center gap-5">
          <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>

            <li><Link to="/service" className="hover:text-blue-500">Services</Link>
            </li>

            <li><Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
          </ul>
          {
            !user ?(
                <div className="flex items-center gap-2">
               <Link to='/login'><Button variant="outline" className="text-black ">Login</Button></Link>
               <Link to='/signup'><Button className=" bg-[#6A38C2] hover:bg-[#340585]">Signup</Button></Link>
                </div>
            ):(
                <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="">
                  <div className="flex gap-4 items-center p-4 border-b">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Sakshi Singh</h4>
                    </div>
                  </div>
                  <div className="flex flex-col m-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                        < User2/>
                        <Button variant='link'> View Profile</Button>
                        </div>               
                   <div className="flex w-fit items-center gap-2 cursor-pointer"> 
                    <LogOut/>
                    <Button variant='link'>Logout</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
            
          }

        </div>
      </div>
    </div>
  );
}

export default Navbar;

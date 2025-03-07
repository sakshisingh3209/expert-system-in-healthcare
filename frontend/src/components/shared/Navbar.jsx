import {Link} from "react-router-dom"
import { Button} from "../ui/button"
import { useState } from "react"
import {Menu,X} from "lucide-react"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <Link to="/" className="text-2xl font-bold text-blue-600">ExpertCare</Link>
                <div className="hidden md:flex space-x-6">
                <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
             <Link to='/login'>
             <Button className="text-blue-600 ml-12">Login</Button>
             </Link>
             <Link to='/signup'>
             <Button className="text-blue-600 ml-12">Signup</Button>
             </Link>

                </div>
                <Link to= "/login">
                <button className="md:hidden p-2 text-blue-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </Link>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
                     <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                    <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

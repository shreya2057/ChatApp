import Brand from "./components/Brand";
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { GrLogin } from '@react-icons/all-files/gr/GrLogin';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';

const NavBar = ({ loggedIn }) => {
    return ( 
        <nav className="relative w-full flex flex-wrap justify-between items-center bg-[#DED2A8] px-2 sm:px-4 py-2.5">

                <Brand/> 

                <div className="flex">
                    <ul className="hidden absolute bg-slate-400 md:flex flex-col md:bg-transparent md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium right-0 justify-items-center self-center w-52 mx-2 mt-36 z-50 md:relative md:w-auto" id="mobile-menu">
                        <li>
                            <a href="#" className="nav-item">About</a>
                        </li>

                        <li>
                            <a href="#" className="nav-item">Contact</a>
                        </li>

                    </ul>

                    {
                        loggedIn==true && 
                        <button type="button" className="text-[#004923] text-center inline-flex text-base font-medium md:rounded hover:bg-transparent md:hover:text-white md:px-7 py-1">
                            <FaUserCircle  className="self-center"/>
                            <span className="hidden md:block md:self-center md:pl-2">Username</span>
                        </button>
                    }

                    {
                        loggedIn==false && 
                        <button type="button" className="btn text-[#004923] md:text-center md:inline-flex md:text-base md:font-medium md:rounded  hover:bg-transparent md:bg-white md:hover:bg-white  md:hover:text-white md:px-7 md:ml-5 md:shadow-md">
                            <GrLogin className="self-center"/>
                            <span className="hidden md:block md:pl-2">Login</span>
                        </button>
                    }

                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                        <FaBars/>
                    </button>

                </div>

                
        </nav>
     );
}
 
export default NavBar;
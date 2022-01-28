import { useState } from "react";
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaFacebookMessenger } from '@react-icons/all-files/fa/FaFacebookMessenger';

const NavBar = () => {

    return ( 
        <nav className="relative flex flex-wrap bg-gray-100 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">

                {/* Brand */}
                <a href="#" className="flex">
                    {/* Logo */}
                    <span className="self-center mr-2">
                        <FaFacebookMessenger/>
                    </span>
                    {/* Brand Name */}
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">ChatApp</span>
                </a>

                {/* NavBar Item */}

                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 ">
                    <FaBars/>
                </button>
                <div className=" hidden w-full mt-2 md:block md:w-auto bg-gray-300 md:bg-gray-100" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-9 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 hover:text-gray-700  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  md:p-0 dark:text-gray-400 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        <li className="hidden md:block">
                            <button data-collapse-toggle="mobile-menu" type="button" className="pl-3 inline-flex text-sm text-gray-500 rounded-lg">
                                <FaBars className="self-center"/>
                                <span className="self-center pl-2">Username</span>
                                
                            </button>
                        </li>
                        <li className="md:hidden ">
                            <a href="#" className="block py-2 pr-4 pl-3 hover:text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                            <button data-collapse-toggle="mobile-menu3" type="button" className="inline-flex text-sm text-gray-500 ">
                                <FaBars className="self-center"/>
                                <span className="self-center pl-2 ">Username</span>
                            </button></a>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

     );
}
 
export default NavBar;
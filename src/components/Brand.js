
import { IoIosText } from '@react-icons/all-files/io/IoIosText';
const Brand = () => {
    return ( 
        <span>
            {/* Brand */}
            <a href="#" className="flex">
                    {/* Logo */}
                    <span className="self-center mr-2 text-xl text-[#004923]">
                        <IoIosText/>
                    </span>
                    {/* Brand Name */}
                    <span className="self-center text-lg font-semibold whitespace-nowrap text-[#004923]">ChatApp</span>
                </a>
        </span>
     );
}
 
export default Brand;
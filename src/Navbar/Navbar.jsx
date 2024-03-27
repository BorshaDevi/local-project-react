import Navber from "./Navber/Navber";
import { RiMenuFoldFill  } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
// import { useState } from "react";

const Navbar = () => {
    // const [open,setOpen] =useState(true)
    // const [open,setOpen] = useState(true)

    const [open,setOpen] =useState(true)
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
      ];

    //   const handleClick =(e) => {
    //     setOpen(e)
    // }
    const  handleOnOff=(e) =>{
          setOpen(e)
    }

    return (
        <div>
            {/* <div className="text-2xl md:hidden" onClick={() => setOpen(!open)} >
                {
                    open === true ?   <RiMenuFoldFill /> :<AiOutlineClose />
                }
                
            </div> */}
            
         {/* <div className=" text-2xl md:hidden " onClick={() =>handleClick(!open)}>
            {
                open === true? <RiMenuFoldFill/> : <AiOutlineClose/>
            }
            
           
         </div> */}
          <div className="text-2xl md:hidden" onClick={() => handleOnOff(!open)}>
            {
                open === true?<RiMenuFoldFill /> :<AiOutlineClose/>
            }
          
          
          </div>
            {/* <ul className={`md:flex justify-center items-center absolute ${open? '-top-24 duration-1000' : ' top-8 duration-1000'}`}> */}
            <ul className={`md:flex justify-center items-center absolute md:static ${open? 'hidden' : ''}`}>
            {/* <ul className={`md:flex justify-center items-center absolute shadow-md  md:static ${open? '-top-28 duration-1000' : 'bg-white shadow-md top-8 duration-1000'} `}> */}

            {
                routes.map(route => <Navber key={route.id} route={route} ></Navber>)
            }
            </ul>
        </div>
    );
};

export default Navbar;
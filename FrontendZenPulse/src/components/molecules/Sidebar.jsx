import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";
import {BsGraphUp} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai";
import {SlLogout} from "react-icons/sl";
import {TbHistoryToggle} from "react-icons/tb";
import {AiOutlineSetting} from "react-icons/ai";


const Navbar =()=>{
  const menu =[
    {name: "Inicio", Link:'/',icon:AiOutlineHome},
    {name: "Graficas", Link:'/',icon:BsGraphUp},
    {name: "Historial", Link:'/',icon:TbHistoryToggle, },
    {name: "Ajustes",Link:'/',icon:AiOutlineSetting, margin:true},
    {name: "Salir", Link:'/',icon:SlLogout},

];
const [open,setOpen]=useState(true);

return(
<>
<section className="flex grap-6">
  <div className={`bg-gray-600 min-h-screen ${open ? 'w-80':'w-20'} 
  duration-500 text-gray-100 px-4`}>
    <div className="py-3 flex justify-end">
      <RxHamburgerMenu size={33} 
      className="cursor-pointer" onClick={()=>setOpen(!open)} />
    </div>
   
    <div className="mt-4 flex flex-col gap-8 relative">
      {
        menu?.map((menu,i)=>(
      
    <Link 
    to={menu?.Link} 
    key={i} className={` ${
      menu?.margin && "mt-40"
    } group flex items-center first-line:text-lg  gap-3.5 font-medium p-3 hover:bg-gray-800 rounded-md`}
  >
        <div>
          {React.createElement(menu?.icon,{size:'33'})}
            </div>
            <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
      </Link>
))
        }
     
      
    </div>

  </div>




</section>

</>

    );
}
export default Navbar;
import {FiSearch} from "react-icons/fi";
import {MdNotificationsActive} from "react-icons/md";
import {TbMessageCircle2} from "react-icons/tb";
import {BiUserCircle} from "react-icons/bi";
const Board =()=>{
return(
<div className="flex items-center justify-between h-[70px]  px-[25px]">
<div className="flex items-center rounded-[5px]">
<input type="text" className="bg-[#eeeff3] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] 
placeholder:text-[14px] leading-[20px] font-normal" placeholder="Search for...."/>
<div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center 
cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
<FiSearch color="white"/>
</div>
</div>
<div className="flex items-center gap-[15px] relative">
     <div className="flex items-center gap-[25px] border-r-[1px] ">
      <TbMessageCircle2/>
    <MdNotificationsActive/>
    </div>
    <div className="flex items-center gap-[15px] relative">
    <p>Usuario </p>
    <div className="h-[50px] w-[50px] rounded-full bg-[#020202] cursor-pointer 
    flex items-center justify-center relative">
        
        <BiUserCircle color="white" className="h-[70px] w-[70px] "/>
    </div>
    </div>

</div>

</div>



)


}
export default Board;
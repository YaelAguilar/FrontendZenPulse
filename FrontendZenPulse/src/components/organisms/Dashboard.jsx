import TemperatureGraph from "../atoms/cakeGraphis/TemperatureGraph"
import PhysicalActivityGraph from "../atoms/cakeGraphis/PhysicalActivityGraph"
import OxygenationGraph from "../atoms/cakeGraphis/OxygenationGraph"
import BPMGraph from "../atoms/cakeGraphis/BPMGraph"
import LinesChart from "../atoms/LinealGraph";
import DemoArea from "../atoms/Circle";
import {GiLevelEndFlag} from "react-icons/gi";
function Dashboard (){

    return(
<div className=" bg-[#F8F9FC]">
<div className="flex items-center justify-between">
<h1 className="text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer">ZenPulse</h1>
<button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center
justify-center px-[30px] cursor-pointer">Generate reporte</button>
</div >
<div className="grid grid-cols-4 gap-[20px] mt-[30px] pb-[20px]">
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Temperatura</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><TemperatureGraph/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Actividad F.</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><PhysicalActivityGraph/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">BPM</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><BPMGraph/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Oxígeno</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><OxygenationGraph/></div>
    </div>
  </div>

</div>
<div className="flex mt-[22px] w-full gap-[30px]">
    <div className="basis-[48%] border bg-white shadow-md cursor-pointer rounded-[4px]">
     <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] 
     border-b-[1px] border-[#EDEDED] mb-[20px]">
      <h2>Nivel de estres</h2>
      <GiLevelEndFlag color="gray" className="cursor pointer"/>
 </div>
     <LinesChart/>
    
    
        </div>
        <div className="basis-[48%] border bg-white shadow-md cursor-pointer rounded-[4px]">
<div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px]
border-[#EDEDED]">
  <h2>Historial</h2>
  <GiLevelEndFlag color="gray" className="cursor pointer"/>
</div>
<div>
<DemoArea/>
</div>
</div>

</div>


</div>


    )
}
export default Dashboard;
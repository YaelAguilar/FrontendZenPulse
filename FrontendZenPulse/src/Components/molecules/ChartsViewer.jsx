import TemperatureChart from "../atoms/pieCharts/TemperatureChart";
import ActivityChart from "../atoms/pieCharts/ActivityChart";
import OxygenationChart from "../atoms/pieCharts/OxygenationChart";
import HeartRateChart from "../atoms/pieCharts/HeartRateChart";
import ApexChart from "../atoms/Graflineal";
import DemoArea from "../atoms/Circle";
import {GiLevelEndFlag} from "react-icons/gi";
function ChartsViewer (){

    return(
<div className=" bg-[#F8F9FC] p-4">
{/*<button className="bg-[#2E59D9] h-[32px] rounded-[10px] text-white flex items-center justify-center px-[30px] cursor-pointer sm:mr-4">Generate reporte</button>*/}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 pb-4">
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div >
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Temperature</h2>
        </div>
    <div className="flex flex-col-2 lg:flex-row mt-4 gap-4">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><TemperatureChart/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Activity</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><ActivityChart/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Heart rate</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><HeartRateChart/></div>
    </div>
  </div>
  <div className="h-[190px] w-[190px] rounded-[25px] bg-white border-l-[8px] border-[#4E73DF]
    flex items-center justify-center px-[5px] cursor-pointer hover:shadow-lg transform hover:scale-[103%]
    transition duration-300 ease-out">
        <div>
        <h2 className="text-[#000000] text-[20px] leading-[10px] font-medium mb-[170px] ml-[20px]">Oxygen</h2>
        </div>
    <div className="flex items-center justify-center">
      <div className="w-44 flex items-start justify-start p-2 ml-[-130px] "><OxygenationChart/></div>
    </div>
  </div>

</div>
<div className="flex flex-col sm:flex-row mt-4 sm:gap-4">
  <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border bg-white shadow-md cursor-pointer rounded-[4px] mb-4 sm:mb-0">
    <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
      <h2>Stress level</h2>
      <GiLevelEndFlag color="black" className="cursor-pointer" size={30}/>
    </div>
    <ApexChart size={30}/>
  </div>

  <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 border bg-white shadow-md cursor-pointer rounded-[4px]">
    <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
      <h2>Record</h2>
      <GiLevelEndFlag color="black" className="cursor-pointer" size={30}/>
    </div>
    <div>
      <DemoArea size={30}/>
    </div>
  </div>
</div>



</div>


    )
}
export default ChartsViewer;
import Navbar from "../components/molecules/Sidebar"
import Board from "../components/molecules/Navbar"
import Dashboard from "../components/organisms/Dashboard";

function PanelDashboardContainer (){
return(
<div className="flex">
<div>
<Navbar/>
</div>
<div className='basis-[100%]'>
<Board/>
<div>
<Dashboard/>
</div>
</div>


</div>


);


}
export default PanelDashboardContainer;
import Sidebar from "../Components/molecules/Sidebar";
import Historial from "../Components/organisms/Historial";
import Header from "../Components/atoms/Header";
//import RingChart from "../Components/atoms/RingChart";

function RecordContainer (){
    return(
        <div className="flex">
            <div>
                <Sidebar/>
            </div>
            <div className='basis-[100%] '>
                <div>
                    <Header />
                </div>
                <div>
                    <Historial/>
                </div>
            </div>
        </div>
    )
}

export default RecordContainer;
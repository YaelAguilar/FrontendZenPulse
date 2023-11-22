import Sidebar from "../Components/molecules/Sidebar"
import SettingsForm from "../Components/atoms/forms/SettingsForm";
import Header from "../Components/atoms/Header";

function SettingsContainer (){
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
                    <SettingsForm/>
                </div>
            </div>
        </div>
    )
}

export default SettingsContainer;
import Inicio from "../Components/organisms/Home";
import Sidebar from "../Components/molecules/Sidebar";
import Header from "../Components/atoms/Header"

function HomeContainer (){
    return(

        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className='basis-[100%] '>   
                <div>
                    <Header />
                </div>
                <div>
                    <Inicio/>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer;
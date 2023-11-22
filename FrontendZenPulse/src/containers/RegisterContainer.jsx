import RegisterForm from "../Components/atoms/forms/RegisterForm"

function RegisterContainer (){

    return (

        <div className="bg-blue-100 flex w-full h-screen" >
            <div className="hidden  relative lg:flex h-full w-1/2 items-center justify-center bg-blue-200">
                <div className="w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-300 rounded-full animate-bounce"/>
                    <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
            </div>  
            <div className="w-96 flex items-center justify-center lg:w-1/2">
                <RegisterForm/>
            </div> 
        </div>
    )
} 

export default RegisterContainer;
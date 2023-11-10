import LoginForm from "../components/atoms/LoginForm";

function LoginContainer() {
  return (
    <>
      {/* Main container with light blue background */}
      <div className="bg-blue-100 flex w-full h-screen">
        
        {/* Right side (login form) */}
        <div className="w-96 flex items-center justify-center lg:w-1/2">
          {/* Login Form component */}
          <LoginForm />
        </div> 

        {/* Left side (visible on large screens) */}
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-blue-200">
          {/* Animated circle */}
          <div className="w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-300 rounded-full animate-bounce" />
          
          {/* Blurry effect at the bottom */}
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>  
      </div>
    </>
  );
}

export default LoginContainer;

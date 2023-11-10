import LoginForm from "../components/atoms/LoginForm";

function LoginContainer() {
  return (
    <>
      <div className="bg-blue-100 flex w-full h-screen">
        {/* Left side of the container */}
        <div className="w-96 flex items-center justify-center lg:w-1/2">
          {/* Render the LoginForm component */}
          <LoginForm />
        </div>

        {/* Right side of the container (hidden on smaller screens) */}
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-blue-200">
          {/* Circular background with animation */}
          <div className="w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-300 rounded-full animate-bounce" />
          {/* Semi-transparent white background at the bottom */}
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </>
  );
}

export default LoginContainer;

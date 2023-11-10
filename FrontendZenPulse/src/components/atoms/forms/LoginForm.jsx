import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  // Create a reference for the form
  const formRef = useRef();
  // Use the useNavigate hook from React Router
  const navigate = useNavigate();

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object from the form
    const formLogin = new FormData(formRef.current);

    // Extract email and password from form data
    const data = {
      email: formLogin.get('email'),
      password: formLogin.get('password')
    };

    try {
      // Send a POST request to the login endpoint
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Show a success alert and navigate to the dashboard
      alert('Session started successfully');
      navigate("/dash");
    } catch (error) {
      // Log an error if there's a problem with the fetch operation
      console.error('There has been a problem with your fetch operation:', error);
    }
  }

  return (
    <>
      <form className="form-register" ref={formRef} onSubmit={handleFormSubmit}>
        <div className="bg-stone-50 px-5 py-10 rounded-xl border-2 border-gray-100">
          <h1 className="text-black text-xl font-semibold">Welcome to zenpulse</h1>
          <h2 className="text-black font-medium text-3xl text-black-500 mt-4">Sign in</h2>
          <div className="mt-4">
            <div>
              <label className="text-black text-lg font-thin font-sans">Enter your email</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                name='email'
              />
            </div>
            <div>
              <label className="text-black text-lg font-thin font-sans">Enter your password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
                name='password'
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                />
                <label className="ml-2 font-thin text-base" htmlFor="remember">Remember for 30 days</label>
              </div>
              <button className="font-thin text-base text-blue-600"> Forgot password</button>
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <Link to='/home'>
                <button className="flex justify-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-shadow py-4 w-11/12 rounded-2xl bg-blue-800 text-white text-xl font-medium" onClick={handleFormSubmit}>
                  Sign in
                </button>
              </Link>
              <button
                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
                  <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
                  <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
                  <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
                </svg>
                Sign in with Google
              </button>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <p className="font-medium text-base">Dont have an account?</p>
              <Link to="/register">
                <button className="text-blue-600 text-base font-medium ml-2">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;

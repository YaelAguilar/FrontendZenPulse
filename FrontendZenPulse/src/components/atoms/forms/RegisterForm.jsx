import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterForm() {
    // Reference to the form
    const FormR = useRef();
    // React Router navigation hook
    const navigate = useNavigate();

    // Click handler for the form
    const handlerClick = async (e) => {
        e.preventDefault();
        const formRegister = new FormData(FormR.current);
        const data = {
            firstname: formRegister.get('firstname'),
            lastname: formRegister.get('lastname'),
            email: formRegister.get('email'),
            password: formRegister.get('password')
        };

        try {
            // Perform POST request to the server
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Show user registered message and navigate to "/dash"
            alert('User registered successfully');
            navigate("/dash");
        } catch (error) {
            // Handle fetch operation errors
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
        <>
            {/* Registration form */}
            <form className="form-register" ref={FormR} onSubmit={handlerClick}>
                <div className="bg-stone-50 px-2 py-2 rounded-xl border-5 border-gray-100">
                    <h1 className="text-black text-xl font-semibold">Welcome to zenpulse</h1>
                    <h2 className="text-black font-medium text-3xl text-black-500 mt-4"> Sign up</h2>
                    <div className="mt-4">
                        {/* Email input */}
                        <div className="flex flex-col">
                            <label className="text-black text-lg font-thin font-sans ">Enter your email</label>
                            <input
                                className="w-10/12 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your email"
                                name='email'
                            />
                        </div>
                        {/* Name and Last Name inputs */}
                        <div className="flex">
                            <div className="flex-none ">
                                <label className="text-black text-lg font-thin font-sans flex flex-col">Enter your name</label>
                                <input
                                    className="w-10/12 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Enter your name"
                                    name='firstname'
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-lg font-thin font-sans flex flex-col">Enter your Last Name</label>
                                <input
                                    className="w-10/12 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                    placeholder="Enter your Last Name"
                                    name='lastname'
                                />
                            </div>
                        </div>
                        {/* Password input */}
                        <div className="flex flex-col">
                            <label className="text-black text-lg font-thin font-sans" >Enter your password</label>
                            <input
                                className="w-10/12 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                                placeholder="Enter your password"
                                name='password'
                                type="password"
                            />
                        </div>
                        {/* Additional options and links */}
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
                        {/* Action buttons */}
                        <div className="mt-4 flex flex-col gap-y-4">
                            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-shadow py-2 rounded-xl bg-blue-800 text-white text-lg font-medium">Sing in</button>
                            <button
                                className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-2  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* ... Google icon ... */}
                                </svg>
                                Sign in with Google
                            </button>
                        </div>
                        {/* Link to sign in */}
                        <div className="mt-4 flex justify-center items-center">
                            <p className="font-black text-base"> Have an account? </p>
                            <Link to="/">
                                <button className="text-blue-600 text-base font-black ml-4">Sign in</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegisterForm;

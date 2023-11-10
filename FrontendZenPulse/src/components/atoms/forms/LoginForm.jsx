import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginForm() {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formLogin = new FormData(formRef.current);
    const data = {
      email: formLogin.get('email'),
      password: formLogin.get('password')
    };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        // Mostrar mensaje de error con SweetAlert2
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
        });
        throw new Error('Network response was not ok');
      }

      // Mostrar mensaje de éxito con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Sesión iniciada correctamente',
      });

      // Si todo está bien, navegar a la página de dashboard
      navigate('/dashboard');
    } catch (error) {
      // Loguear error en la consola
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

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
                  {/* Icono de Google */}
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

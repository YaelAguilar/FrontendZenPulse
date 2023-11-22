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
    <div className="container mx-auto">
      <form className="form-login" ref={formRef} onSubmit={handleFormSubmit}>

        <div className="bg-stone-50 px-5 py-10 rounded-xl border-2 border-gray-100">
          <h1 className="text-black text-xl font-semibold">Welcome to zenpulse</h1>
          <h2 className="text-black font-medium text-3xl text-black-500 mt-4"> Sing in</h2>
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
              <label className="text-black text-lg font-thin font-sans" >Enter your password</label>
              <input
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                type="password"
                name='password'
              />
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <Link to='/home'>
              <button className="flex justify-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-shadow py-4 w-11/12 rounded-2xl bg-blue-800 text-white text-xl font-medium" onClick={handleFormSubmit}>
                  Sign in
                </button>
              </Link>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <p className="font-medium text-base"> Dont have an account? </p>
              <Link to="/register">
                <button className="text-blue-600 text-base font-medium ml-2">Sign up</button>
              </Link>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default LoginForm;

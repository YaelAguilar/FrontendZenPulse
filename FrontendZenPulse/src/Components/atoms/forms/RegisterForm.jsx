import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUser } from "../../context/UserContext";

function RegisterForm() {
  const navigate = useNavigate();
  const { setFirstName } = useUser();

  const handleRegister = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        console.error('Server error:', response.status, responseData);
        throw new Error(responseData.message || 'Network response was not ok');
      }

      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'Te has registrado exitosamente.',
      });

      setFirstName(data.firstname);
      navigate('/dashboard');
    } catch (error) {
      console.error('Ya existe un usuario con este correo electrónico:');
      Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: 'Este correo electrónico ya ha sido registrado.',
      });
    }
  };

  const FormR = useRef();

  const handlerClick = async (e) => {
    e.preventDefault();
    const formRegister = new FormData(FormR.current);
    const data = {
      firstname: formRegister.get('firstname'),
      lastname: formRegister.get('lastname'),
      email: formRegister.get('email'),
      password: formRegister.get('password'),
    };

    if (Object.values(data).some((value) => !value)) {
      Swal.fire({
        icon: 'error',
        title: 'Error de registro',
        text: 'Verifica que la información ingresada esté completa.',
      });
      return;
    }

    handleRegister(data);
  };

  return (
    <div>
      <form className="form-register" ref={FormR} onSubmit={handlerClick}>
        <div className="bg-stone-50 px-2 py-2 rounded-xl border-8 border-gray-100">
          <h1 className="text-black text-xl font-semibold">Welcome to zenpulse</h1>
          <h2 className="text-black font-medium text-3xl text-black-500 mt-4"> Sign up</h2>
          <div className="mt-4">
            <div className="flex flex-col">
              <label className="text-black text-lg font-thin font-sans">Enter your email</label>
              <input
                className="w-10/12 md:w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-none md:mr-2">
                <label className="text-black text-lg font-thin font-sans flex flex-col">Enter your name</label>
                <input
                  className="w-10/12 md:w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your name"
                  name="firstname"
                />
              </div>
              <div className="md:flex-1 md:mr-2">
                <label className="text-black text-lg font-thin font-sans md:mb-2">Enter your Last Name</label>
                <input
                  className="w-full md:w-10/12 border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  placeholder="Enter your Last Name"
                  name="lastname"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-black text-lg font-thin font-sans">Enter your password</label>
              <input
                className="w-10/12 md:w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Enter your password"
                name="password"
                type="password"
              />
            </div>
            <div className="mt-4 flex flex-col gap-y-4">
              <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-shadow py-2 rounded-xl bg-blue-800 text-white text-lg font-medium">Sign in</button>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <p className="font-black text-base"> Have an account? </p>
              <Link to="/">
                <button className="text-blue-600 text-base font-black ml-4">Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;

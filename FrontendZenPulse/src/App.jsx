import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import FormLogin from "./Pages/login";
import FormRegister from "./Pages/registre";
import LinesChart from "./Components/Graflineal";
import Inicio from "./Pages/Graficas";
import Dashboard from "./Pages/Dash";*/
import Login from "./pages/Login";
import Register from "./pages/Register"

function App() {

  return (  
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the registration page */}
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

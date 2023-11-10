import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import PanelDashboard from "./pages/PanelDashboard";

function App() {

  return (  
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the registration page */}
        <Route path="register" element={<Register />} />

        {/* Route for see the principal view */}
        <Route path="dashboard" element={<PanelDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PanelDashboard from "./pages/PanelDashboard";
import Sensor from "./pages/Sensor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<PanelDashboard />} />
        <Route path="sensor" element={<Sensor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

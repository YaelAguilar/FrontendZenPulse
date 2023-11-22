import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './Components/context/UserContext';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Dashboard from './Pages/Dashboard';
import Record from './Pages/Record';
import Error404 from "./Pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <UserProvider> {/* Envuelve tus rutas con UserProvider */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="record" element={<Record />} />
          <Route path="settings" element={<Settings />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;

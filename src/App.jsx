import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Students } from "./pages/students/Students";
import { useState } from "react";
import { Plans } from "./pages/plans/Plans";

function App() {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard menuClosed={menuClosed} setMenuClosed={setMenuClosed} toggleMenu={toggleMenu}/>} />
        <Route path="/students" element={<Students menuClosed={menuClosed} setMenuClosed={setMenuClosed} toggleMenu={toggleMenu}/>} />
        <Route path="/plans" element={<Plans menuClosed={menuClosed} setMenuClosed={setMenuClosed} toggleMenu={toggleMenu}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

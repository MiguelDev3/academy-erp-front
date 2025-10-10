import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Students } from "./pages/students/Students";
import { useState } from "react";
import { Plans } from "./pages/plans/Plans";
import { PlanForm } from "./pages/plans/PlanForm";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { ProtectedLayout } from "./layout/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:action" element={<PlanForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

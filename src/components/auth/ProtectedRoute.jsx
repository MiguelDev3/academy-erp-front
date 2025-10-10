import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useEnv } from "../../hooks/useEnv";

export const ProtectedRoute = () => {
  const { apiDomainAuth } = useEnv();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    fetch(`${apiDomainAuth}/verify`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.valid))
      .catch((err) => setIsAuthenticated(false));
  }, []);

  if (isAuthenticated === null) return <div>Verificando...</div>;
  
  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

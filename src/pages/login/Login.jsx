import { Link, useNavigate } from "react-router-dom";
import { useEnv } from "../../hooks/useEnv";
import Cookies from "js-cookie";

export const Login = () => {
  const navigate = useNavigate();
  const { apiDomain } = useEnv();
  const loginUser = async () => {
    const inputUsernameValue = document.querySelector("#login-username").value;
    const inputPasswordValue = document.querySelector("#login-password").value;

    const user = {
      username: inputUsernameValue.trim(),
      password: inputPasswordValue.trim(),
    };

    const apiHeaders = new Headers();
    apiHeaders.append("Content-Type", "application/json");
    const apiOptions = {
      method: "POST",
      headers: apiHeaders,
      credentials: "include",
      body: JSON.stringify(user),
    };

    try {
      const response = await fetch(`${apiDomain}/api/auth/login`, apiOptions);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData[0].message || `Error: ${response.status}`);
      }

      const data = await response.json();

      navigate("/dashboard");
    } catch (error) {
      alert("Usuario o contraseña incorrecta");
      throw new Error(error.message);
    }
  };
  return (
    <>
      <main className="bg-[#263f68] min-h-dvh flex justify-center items-center font-roboto">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <img className="w-24 h-16" src="/logo-enriques 1.png"></img>
                <p className="m-0 text-[16px] font-bungee dark:text-white">
                  Ingresa a tu cuenta
                </p>
                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                  Sistema para usuarios de la academia
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400">
                  Nombre de usuario
                </label>
                <input
                  id="login-username"
                  placeholder="Username"
                  className="border rounded-lg px-3 py-2 mb-5 text-gray-500 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">
                Contraseña
              </label>
              <input
                id="login-password"
                className="border rounded-lg px-3 py-2 mb-5 text-gray-500 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                type="password"
              />
            </div>
            <div>
              <button
                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                onClick={loginUser}
              >
                Ingresar
              </button>
            </div>
            <hr className="my-5 bg-white" />
            <div className="text-sm text-gray-500">
              <Link className="text-blue-500" to="/register">
                Crear cuenta
              </Link>{" "}
              |{" "}
              <Link className="text-blue-500" to="/forgot-password">
                Olvide mi contraseña
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

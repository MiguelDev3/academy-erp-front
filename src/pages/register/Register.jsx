import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [passwordIsVisible, setPasswordIsVisible] = useState({
    password: false,
    repeated: false,
  });

  const changePasswordVisibility = (e, inputNumber = 0) => {
    if (inputNumber === 0) {
      setPasswordIsVisible({
        ...passwordIsVisible,
        password: e.target.checked,
      });
    } else {
      setPasswordIsVisible({
        ...passwordIsVisible,
        repeated: e.target.checked,
      });
    }
  };

  const comparePasswords = () => {
    const inputPassword = document.querySelector("#register-password");
    const inputRepeated = document.querySelector("#register-repeated-password");

    return inputPassword.value.trim() === inputRepeated.value.trim()
  }

  const registerUser = async () => {
    if(!comparePasswords()){
      console.log("Contraseñas no coinciden")
      return
    } 

    const inputUsername = document.querySelector("#register-username");
    const inputPassword = document.querySelector("#register-password");
    const newUser = {
      username: inputUsername.value.trim(),
      password: inputPassword.value.trim()
    }

    const apiHeaders = new Headers();
    apiHeaders.append('Content-Type', 'application/json');
    const apiOptions = {
      method: 'POST',
      headers: apiHeaders,
      body: JSON.stringify(newUser)
    }

    try{
      const response = await fetch("http://localhost:3000/register", apiOptions);
      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData[0].message || `Error ${response.status}`)
      }
      const data = await response.json();
      console.log("Usuario Creado")
      navigate("/");
    }catch(error){
      console.log(error)
    }



  }
  return (
    <main className="bg-[#263f68] min-h-dvh flex justify-center items-center font-roboto">
      <div className="relative py-3 sm:max-w-xs sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <p className="m-0 text-[16px] font-bungee dark:text-white">
                Regístrate
              </p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Recuerda bien tu usuario y contraseña
              </span>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="font-semibold text-xs text-gray-400">
                Nombre de usuario
              </label>
              <input
                placeholder="Username"
                className="border rounded-lg px-3 py-2 mb-5 text-gray-500 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                id="register-username"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">
              Contraseña
            </label>
            <input
              className="border rounded-lg px-3 py-2 text-gray-500 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              type={passwordIsVisible.password ? "text" : "password"}
              id="register-password"
            />
            <div className="flex gap-2 text-gray-400 mb-5">
              <input
                id="show-password"
                type="checkbox"
                onClick={(e) => {
                  changePasswordVisibility(e, 0);
                }}
              />
              <label htmlFor="show-password" className="text-xs">
                Mostrar contraseña
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold text-xs text-gray-400">
              Repetir Contraseña
            </label>
            <input
              className="border rounded-lg px-3 py-2 text-gray-500 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
              type={passwordIsVisible.repeated ? "text" : "password"}
              id="register-repeated-password"
            />
            <div className="flex gap-2 text-gray-400 mb-5">
              <input
                id="show-repeated-password"
                type="checkbox"
                onClick={(e) => {
                  changePasswordVisibility(e, 1);
                }}
              />
              <label htmlFor="show-repeated-password" className="text-xs">
                Mostrar contraseña
              </label>
            </div>
          </div>
          <div>
            <button className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
            onClick={registerUser}>
              Registrar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

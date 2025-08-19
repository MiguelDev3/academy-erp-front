import { Link } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { StudentIcon } from "../../assets/icons/studentIcon";

export const Sidebar = ({ menuClosed, toggleMenu }) => {
  return (
    <aside
      className={`fixed min-h-dvh min-w-70 bg-[#263f68] text-white transition-transform duration-400 ease-in-out ${
        menuClosed ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <h2 className="text-3xl font-bold">Menú</h2>
      <nav>
        <div>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={() => {
             setTimeout(toggleMenu, 100) 
            }}
          >
            <HomeIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Inicio</span>
          </Link>
          <Link
            to="/students"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={() => {
             setTimeout(toggleMenu, 100) 
            }}
          >
            <StudentIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Estudiantes</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

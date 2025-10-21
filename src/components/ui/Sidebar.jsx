import { Link, Navigate } from "react-router-dom";
import { HomeIcon } from "../../assets/icons/homeIcon";
import { StudentIcon } from "../../assets/icons/studentIcon";
import { PlansIcon } from "../../assets/icons/PlansIcon";
import { CoursesIcon } from "../../assets/icons/CoursesIcon";

export const Sidebar = ({ menuClosed, toggleMenu }) => {
  return (
    <aside
      className={`fixed min-h-dvh min-w-70 bg-[#263f68] text-white transition-transform duration-400 ease-in-out ${
        menuClosed ? "-translate-x-full" : "translate-x-0"
      } z-50`}
    >
      <h2 className="text-3xl font-bold">Menú</h2>
      <nav>
        <div>
          <Link
            to="/dashboard"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={toggleMenu}
          >
            <HomeIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Inicio</span>
          </Link>
          <Link
            to="/students"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={toggleMenu}
          >
            <StudentIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Estudiantes</span>
          </Link>
          <Link
            to="/plans"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={toggleMenu}
          >
            <PlansIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Planes</span>
          </Link>
          <Link
            to="/courses"
            className="flex items-center gap-2 p-4 text-white hover:bg-[#1f2a3d]"
            onClick={toggleMenu}
          >
            <CoursesIcon className={"fill-white pointer-events-none"} />
            <span className="text-xl pointer-events-none">Cursos</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

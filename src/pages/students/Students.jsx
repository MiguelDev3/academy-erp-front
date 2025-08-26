import { Link } from "react-router-dom"
import { StudentListIcon } from "../../assets/icons/StudentListIcon"
import { HamburgerButton } from "../../components/ui/HamburgerButton"
import { Sidebar } from "../../components/ui/sidebar"
import { StudentControlIcon } from "../../assets/icons/StudentControlIcon"
import { StudentPaymentIcon } from "../../assets/icons/StudentPaymentIcon"

export const Students = ({ menuClosed, toggleMenu }) => {
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu}/>
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3 ">
        <h1 className="pt-3 font-bold text-3xl">Estudiantes</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-sm">Vista general</h2>
          </div>
          <div className="w-full p-3">
            <div>
              <h3>Inscritos:</h3>
              <span>12</span>
              <h3>Con pago atrasado:</h3>
              <span>2</span>
            </div>
          </div>
        </section>
        <Link to="/students/all" className="bg-blue-100 dark:bg-blue-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex flex-col justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105">
          <StudentListIcon className={"fill-white"} width={120} height={120}/>
          <h3 className="font-bold text-2xl">Estudiantes Inscritos</h3>
        </Link>
        <Link to="/students/control" className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex flex-col justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105">
          <StudentControlIcon className={"fill-white"} width={120} height={120}/>
          <h3 className="font-bold text-2xl">Control de asistencias</h3>
        </Link>
        <Link to="/students/payments" className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-2 rounded-lg flex flex-col justify-center items-center gap-3 transition duration-300 ease-in-out hover:bg-green-200 dark:hover:bg-green-800 transform hover:scale-105">
          <StudentPaymentIcon className={"fill-white"} width={120} height={120}/>
          <h3 className="font-bold text-2xl">Control de pagos</h3>
        </Link>
      </main>
    </>
  )
}
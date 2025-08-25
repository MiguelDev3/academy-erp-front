import { HamburgerButton } from "../../components/ui/HamburgerButton";
import { Sidebar } from "../../components/ui/sidebar";

export const Dashboard = ({ menuClosed, toggleMenu }) => {
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main className="min-h-dvh bg-gray-200 px-3 font-roboto flex flex-col gap-3 ">
        <h1 className="pt-3 font-bold text-3xl">Dashboard</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-sm">Vista general</h2>
          </div>
          <div className="w-full p-3">
            <p className="text-balance">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, quisquam veniam exercitationem repudiandae in a
              itaque accusantium modi dolore nobis voluptas delectus iste.
              Dolorem eum eveniet, harum soluta quaerat quod!
            </p>
          </div>
        </section>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-400">
            <h2 className="py-3 ps-3 font-medium text-sm">Estudiantes</h2>
          </div>
          <div className="w-full p-3">
            <p className="text-balance">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, quisquam veniam exercitationem repudiandae in a
              itaque accusantium modi dolore nobis voluptas delectus iste.
              Dolorem eum eveniet, harum soluta quaerat quod!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

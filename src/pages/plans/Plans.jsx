import { HamburgerButton } from "../../components/ui/HamburgerButton";
import { Sidebar } from "../../components/ui/sidebar";

export const Plans = ({ menuClosed, toggleMenu }) => {
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3 ">
        <h1 className="pt-3 font-bold text-3xl">Planes</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-sm">Vista general</h2>
          </div>
        </section>
      </main>
    </>
  );
};

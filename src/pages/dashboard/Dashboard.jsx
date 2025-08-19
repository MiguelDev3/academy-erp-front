import { HamburgerButton } from "../../components/ui/HamburgerButton";
import { Sidebar } from "../../components/ui/sidebar";

export const Dashboard = ({ menuClosed, toggleMenu }) => {
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu}/>
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main>
        <h1>Dashboard</h1>
      </main>
    </>
  );
};

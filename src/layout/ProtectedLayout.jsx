import { useState } from "react";
import { HamburgerButton } from "../components/ui/HamburgerButton";
import { Sidebar } from "../components/ui/sidebar";
import { Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenu = () => {
    setMenuClosed(!menuClosed);
  };

  return (
    <>
      <div>
        <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu} />
        <HamburgerButton
          menuClosed={menuClosed}
          toggleMenu={toggleMenu}
        />
        <Outlet />
      </div>
    </>
  );
};

import { CloseIcon } from "../../assets/icons/CloseIcon";
import { MenuIcon } from "../../assets/icons/menuIcon";

export const HamburgerButton = ({ menuClosed, toggleMenu }) => {
  return (
    <button
      className={`fixed flex items-center justify-center w-10 h-10 bottom-5 right-5 bg-[#263f68] z-100`}
      onClick={toggleMenu}
    >
      {menuClosed ? (
        <MenuIcon className={"fill-white"} />
      ) : (
        <CloseIcon className={"fill-white"} />
      )}
    </button>
  );
};

import { HamburgerButton } from "../../components/ui/HamburgerButton"
import { Sidebar } from "../../components/ui/sidebar"

export const Students = ({ menuClosed, toggleMenu }) => {
  return (
    <>
      <Sidebar menuClosed={menuClosed} toggleMenu={toggleMenu}/>
      <HamburgerButton menuClosed={menuClosed} toggleMenu={toggleMenu} />
      <main>
        <h1>Estudiantes</h1>
      </main>
    </>
  )
}
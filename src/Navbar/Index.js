import "./navbar.css";
import DesktopNavbar from "./Desktop/Navbar";
import MobileNavbar from "./Mobile/Navbar";


const Navbar = () => {

    return (
        <header>
            <DesktopNavbar />
            <MobileNavbar />
        </header>
    );
}
 
export default Navbar;
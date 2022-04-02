import { Link } from "react-router-dom"

const Navigation = ({closeMenu}) => {
    return (
        <nav className="navbar">
            <Link to="/" onClick={() => closeMenu()}>HJEM</Link>
            <Link to="/radgivning" onClick={() => closeMenu()}>RÅDGIVNING</Link>
            <Link to="/pris" onClick={() => closeMenu()}>PRIS</Link>
            <Link to="/about" onClick={() => closeMenu()}>OM</Link>
            <Link to="/contact" onClick={() => closeMenu()}>KONTAKT</Link>
        </nav>
    );
}
 
export default Navigation;
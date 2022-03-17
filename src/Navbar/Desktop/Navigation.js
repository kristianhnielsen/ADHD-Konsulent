import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
        <nav className="navbar">
            <Link to="/">HJEM</Link>
            <Link to="/radgivning">PRIS OG RÅDGIVNING</Link>
            <Link to="/about">OM</Link>
            <Link to="/contact">KONTAKT</Link>
        </nav>
    );
}
 
export default Navigation;
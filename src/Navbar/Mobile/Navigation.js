
const Navigation = ({closeMenu}) => {
    return (
        <nav className="navbar">
            <a href="/" onClick={() => closeMenu()}>HJEM</a>
            <a href="/radgivning" onClick={() => closeMenu()}>RÅDGIVNING</a>
            <a href="/pris" onClick={() => closeMenu()}>PRIS</a>
            <a href="/about" onClick={() => closeMenu()}>OM</a>
            <a href="/contact" onClick={() => closeMenu()}>KONTAKT</a>
            {/* <Link to="/" onClick={() => closeMenu()}>HJEM</Link>
            <Link to="/radgivning" onClick={() => closeMenu()}>RÅDGIVNING</Link>
            <Link to="/pris" onClick={() => closeMenu()}>PRIS</Link>
            <Link to="/about" onClick={() => closeMenu()}>OM</Link>
            <Link to="/contact" onClick={() => closeMenu()}>KONTAKT</Link> */}
        </nav>
    );
}
 
export default Navigation;
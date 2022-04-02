const Navigation = ({closeMenu}) => {
    return (
        <nav className="navbar">
            <a href="/" onClick={() => closeMenu()}>HJEM</a>
            <a href="/radgivning" onClick={() => closeMenu()}>RÅDGIVNING</a>
            <a href="/pris" onClick={() => closeMenu()}>PRIS</a>
            <a href="/about" onClick={() => closeMenu()}>OM</a>
            <a href="/contact" onClick={() => closeMenu()}>KONTAKT</a>
        </nav>
    );
}
 
export default Navigation;
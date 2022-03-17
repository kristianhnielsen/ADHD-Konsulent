import { useState } from "react";
import CompanyName from "../CompanyName";
import Navigation from "./Navigation";

const MobileNavbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    const closeMenu = () => {
        setShowMenu(false);
    };
    
    return (
        <div className="mobile-nav">
            <CompanyName />
            <label htmlFor="menuTrigger">
                <input 
                    type="checkbox" 
                    className="menuTrigger" 
                    id="menuTrigger"
                    checked={showMenu}
                    onChange={handleShowMenu}
                    />
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>MENU</span>
                <Navigation closeMenu={closeMenu}/>
            </label>
        </div>
    );
}
 
export default MobileNavbar;
import CompanyName from "../CompanyName";
import Navigation from "./Navigation";

const DesktopNavbar = () => {
    return (
        <div className="desktop-nav">
            <CompanyName />
            <Navigation />
        </div>
    );
}
 
export default DesktopNavbar;
import { Link } from "react-router-dom";
import "./errorpage.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Beklager!</h2>
            <p>Siden du leder efter, blev desværre ikke fundet.</p>
            <Link to="/">Gå tilbage forsiden</Link>
        </div>
    );
}
 
export default NotFound;
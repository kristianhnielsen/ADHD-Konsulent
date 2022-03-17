import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ title, sessions, price }) => {
    return (
        <section className="card">
            <article>
                <h2>{ title }</h2>
                { sessions && <p>{ (sessions > 1) ? `${sessions} sessioner` : `${sessions} session` }</p> }   
                <p>{ price }</p>
            </article>
            
            <div className="card-button">
                <Link to="/contact" >BESTIL</Link>
            </div>
        </section>
    );
}
 
export default Card;
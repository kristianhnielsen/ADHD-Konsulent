import "./home.css";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import FamilyInHandsSVG from "../Img/FamilyInHandsSVG";

const Home = () => {

    return (
        <div className="home grid-columns-two">
            <Helmet>
                <title>ADHD OG AUTISME KONSULENT</title>
                <meta name="description" content="Redskaber og værktøjer til håndtering af hverdagen med ADHD og autisme i Syddanmark" />
            </Helmet>
            <section className="main-content">
                <h1 className='primary-bottom-border'>ADHD OG AUTISME KONSULENT</h1>
                <p>Mere end 20 års erfaring som familiebehandler og konsulent i familier med børn med ADHD / ADD og autismespektrumforstyrrelser</p>
                <div className="button-container">
                    <Link to="/contact" className='main-button button'>Gratis afklarende samtale</Link>
                    <Link to="/radgivning" className='info-button button'>Mere information</Link>
                </div>
            </section>
            <section className="homepage-image">
                <FamilyInHandsSVG height={400} width={400} handsColor={"#a22542"} />
            </section>
        </div>
    );
}
 
export default Home;
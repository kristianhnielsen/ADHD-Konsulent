import "./consultation.css";
import Headline from "../Helpers/Headline";
import Quote from "./Quote";
import { Helmet } from "react-helmet";
import FatherEmbraceSVG from "../Img/FatherEmbraceSVG";


const Consultation = () => {
    return (
        <div className="consultation">
            <Helmet>
                <title>RÅDGIVNING | ADHD OG AUTISME KONSULENT</title>
                <meta name="description" content="Lær mere om redskaber og håndtering af hverdagen med ADHD og autisme, samt priser for rådgivning" />
            </Helmet>
            <Headline headline="RÅDGIVNING" />
            <section className="grid-columns-two">
                <section className="left-column">
                    <article>
                        <h2>Værktøjer til at få en bedre forståelse og indsigt i ADHD/autisme, til at mindske konflikter i hverdagen</h2>
                        <p>Lær at forstå og styke dit barns selvtillid og selværd.</p>
                        <p>Lær at hjælpe dit barn med at regulere deres følelser.</p>

                        <div className="results">
                            <ul>
                                <li>Lær hvordan du kan styrke dit barns selvværd</li>
                                <li>Forstå dit barns adfærd og reaktionsmønstre</li>
                                <li>Lær at forebygge og håndtere konflikter</li>
                                <li>Lær at hjælpe dit barn med at regulere følelser</li>
                            </ul>
                        </div>
                        <h4>Jeg tilrettelægger <u>altid</u> forløbet sammen med jer og jeres familie.</h4>
                    </article>
                </section>
                <section className="illustration">
                    <FatherEmbraceSVG width={350} height={350} />
                    <Quote />
                </section>
            </section>
            <section className="read-more">
                <Headline headline="LÆS MERE" />
                <div className="links">
                    <a 
                    href="https://www.svsh.dk/" 
                    className="read-more-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Skolen ved Sorte Hest</a>
                    
                    <a 
                    href="https://adhd.dk/" 
                    className="read-more-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >ADHD.dk</a>
                    
                    <a 
                    href="https://drrossgreene.com/" 
                    className="read-more-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Dr. Ross Greene</a>
                    
                    <a 
                    href="https://eng.hejlskov.se/" 
                    className="read-more-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >Bo Hjelskov Elvén</a>
                </div>
            </section>
        </div>
    );
}
 
export default Consultation;
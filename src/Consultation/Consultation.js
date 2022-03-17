import "./consultation.css";
import Headline from "../Helpers/Headline";
import Quote from "./Quote";
import { Helmet } from "react-helmet";
import FatherEmbraceSVG from "../Img/FatherEmbraceSVG";


const Consultation = () => {
    return (
        <div className="consultation">
            <Helmet>
                <title>RÅDGIVNING OG PRIS | ADHD OG AUTISME KONSULENT</title>
                <meta name="description" content="Lær mere om redskaber og håndtering af hverdagen med ADHD og autisme, samt priser for rådgivning" />
            </Helmet>
            <Headline headline="RÅDGIVNING" />
            <section className="grid-columns-two">
                <section className="left-column">
                    <article>
                        <h2>Jeg tilrettelægger <u>altid</u> forløbet sammen med familien</h2>
                        <p>Få støtte til at få jeres private netværk til at forstå hvordan det er i lige netop jeres familie Så det bliver nemmere for dem at støtte jeres familie.</p>
                        <div className="results">
                            <ul>
                                <li>Lær hvordan du kan styrke dit barns selvværd</li>
                                <li>Få bedre forståelse og indsigt i ADHD/AUTISME</li>
                                <li>Få værktøjer til at mindske konflikter i hverdagen</li>
                                <li>Forstå dit barns adfærd og reaktionsmønstre</li>
                                <li>Lær at forebygge og håndtere konflikter</li>
                                <li>Lær at hjælpe dit barn med at regulere følelser</li>
                            </ul>
                        </div>
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
                    <a href="https://www.svsh.dk/" className="read-more-link">Skolen ved Sorte Hest</a>
                    <a href="https://adhd.dk/" className="read-more-link">ADHD.dk</a>
                    <a href="https://drrossgreene.com/" className="read-more-link">Dr. Ross Greene</a>
                    <a href="https://eng.hejlskov.se/" className="read-more-link">Bo Hjelskov Elvén</a>
                </div>
            </section>
        </div>
    );
}
 
export default Consultation;
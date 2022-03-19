import "./about.css";
import Headline from "../Helpers/Headline";
import Profile from "../Img/headshot-square.jpeg";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div className="about grid-columns-two">
            <Helmet>
                <title>OM | ADHD OG AUTISME KONSULENT</title>
                <meta name="description" content="Om ADHD og autisme eksperten Lasse Nielsen" />
            </Helmet>
            <section className="left-column">
                <Headline headline="OM" />
                <article>
                    <p>Jeg har mere end 20 års erfaring som familiebehandler og konsulent i opgaver i familier der omhandler børn med ADHD/ADD og autismespektrumforstyrrelser. Her har Lasse udviklet flere metoder der kan medvirke til at nedbringe mange af de udfordringer der er forbundet med at have et barn med ADHD eller Autisme.</p>
                    <p>Udover pædagog uddannelsen, er Lasse efteruddannet i:</p>
                    <ul>
                        <li>Systemisk familiebehandling</li>
                        <li>Kognitiv terapi</li>
                        <li>Mentaliseringsbaseret familiebehandling</li>
                        <li>Teacch (pictogramintegration) autisme pædagogik</li>
                        <li>ADHD Forældrekursus (KIK - Kærlighed i kaos)</li>
                        </ul>
                </article>
            </section>
            <section className="profile-photo">
                <img src={Profile} alt="Lasse Nielsen profile" />
            </section>
        </div>
    );
}
 
export default About;
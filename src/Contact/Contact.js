import "./contact.css";
import profilePhoto from "../Img/headshot-tall.png";
import Headline from "../Helpers/Headline";
import { Helmet } from "react-helmet";
import PersonIconSVG from "../Img/PersonIconSVG";
import PhoneIconSVG from "../Img/PhoneIconSVG";
import EmailIconSVG from "../Img/EmailIconSVG";


const Contact = () => {
    const email = "donsen.lassen@hotmail.com";

    return (
        <>
            <Helmet>
                <title>KONTAKT | ADHD OG AUTISME KONSULENT</title>
                <meta name="description" content="Kontakt og bestil tid ved ADHD og autisme specialist Lasse Nielsen" />
            </Helmet>
            <Headline headline="Kontakt"/>
            <div className="contact grid-columns-two">
                <section className="contact-content">
                        <div className="contact-details">
                            <PersonIconSVG width={40} height={40} fill={"#000000"} />
                            <p>LASSE NIELSEN</p>
                        </div>
                        <div className="contact-details">
                            <PhoneIconSVG width={40} height={40} fill={"#000000"} />
                            <p>+45 40 61 31 02</p>
                        </div>
                        <div className="contact-details">
                            <EmailIconSVG width={40} height={40} fill={"#000000"} />
                            <p><a href={`mailto:${email}?subject:ADHD & Autisme konsulent`}>{ email.toUpperCase() }</a></p>
                        </div>
                </section>
                <section className="contact-image">
                    <img src={profilePhoto} alt="Lasse Nielsen" />
                </section>
            </div>
        </>
    );
}
 
export default Contact;
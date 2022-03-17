import QuoteStartIconSVG from "../Img/QuoteStartIconSVG";
import QuoteEndIconSVG from "../Img/QuoteEndIconSVG";
import "./quote.css";

const Quote = () => {
    const quotes = [
        'Vi havde aldrig troet at der fandtes en som Lasse der kunne redde vores familie og ægteskab samtidigt',
        'Alle familier med ADHD burde have tilbud og "deres egen Lasse"',
        'Jeg kunne ønske at havde et billede hængende af Lasse, så kunne jeg bare kigge op på ham og forestille mig hvad han ville svare, så kunne vi hurtigt komme videre'
    ];
    const randQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randIndex];
    }
    const quote = randQuote();
    const quotationMarkSize = 40;
    const quotationMarkColor = "#000000";

    return (
        <section className="quote">
            <QuoteStartIconSVG width={quotationMarkSize} height={quotationMarkSize} fill={quotationMarkColor} />
            <p><em>{ quote }</em></p>
            <QuoteEndIconSVG width={quotationMarkSize} height={quotationMarkSize} fill={quotationMarkColor} />
        </section>
    );
}
 
export default Quote;
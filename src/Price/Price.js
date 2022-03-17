import "./price.css";
import Headline from "../Helpers/Headline"
import Card from "./Card";


const Price = () => {
    return (
        <div className="price">
            <Headline headline="PRIS" />
            <div className="cards">
                <Card title='Familie Pakke' price="4.000 kr" sessions={10} />
                <Card title='Forældre Pakke' price="2.000 kr" sessions={5}/>
                <Card title='Forældre Rådgivning' price="500 kr" sessions={1}/>
                <Card title='Afklarende Samtale' price="GRATIS"/>
            </div>
        </div>
    );
}
 
export default Price;
import "./helpers.css";

const Headline = ({headline}) => {
    return (
        <div className="headline">
            <h2 className="primary-bottom-border">{ headline.toUpperCase() }</h2>
        </div>
    );
}
 
export default Headline;
import React from 'react';
import PropTypes from 'prop-types';
import "../style/Card.css"
function Card(props) {
    const isLastElement = props.id === props.length;
        return (
            <>
        <div className="card">
            <img className="card--img" src={`./images/${props.coverImg}`} alt="mount fuji" />
            <div className="card--text">
                <div className="card--location">
                    <img className="card--location--img" src="./images/Fill 219.png" alt="location" />
                    <p className="card--country">{props.location}</p>
                    <a className="card--google-link" href="http://www.google.com">View on Google Maps</a>
                </div>
                <h1 className="card-place-name">{props.title}</h1>
                <h2 className="card-date">{props.date}</h2>
                <p className="card-explanation">{props.description}</p>
            </div>
        </div>
        <div>
        {!isLastElement && <div className="card-border">&nbsp;</div>}
        </div>
        </>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    googleMaps: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired
};
export default Card;
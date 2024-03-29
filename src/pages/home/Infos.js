import React from 'react';
import invoiceScreen from '../../assets/images/invoiceScreen.png';
import "../../assets/styles/home/Infos.css";

const Infos = (props) => {
  return (
    <div className="infos-container">
        <div className="image-container">
            <img src={props.image} alt="Invoice Example" />
        </div>
        <div className="text-container">
            <h2>{props.heading}</h2>
            <p><b>{props.boldText}</b><br></br></p>
            <p>{props.text}</p>
            <button>Contact us →</button>
        </div>
    </div>
  );
};

export default Infos;
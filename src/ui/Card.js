import React from "react";
import '../uiStyles/Card.css';

const Card = (props) => {
    const styes = "card "+props.className;
    return <div className={styes}>{ props.children}</div>
}

export default Card;
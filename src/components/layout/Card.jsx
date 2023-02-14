import "./Card.css";
import React from "react";


export default (props) => {

    const cardStyle ={
        backgroundColor: props.color || '#542733',
        borderColor: props.color || '#542733',
    }
     return (
    <div id="Card" style={cardStyle}>
    <div id="Title"><strong>{props.titulo}</strong></div>
        <div id="Content">{props.children}
        </div>
    </div>
    );
};



import React from 'react';
import './box.css';

function Box(props){
    let title = props.title;
    let image = props.img;
    return(
        <div className="product">
            <img src={image} alt='' />
            <div>{title}</div>
        </div>
    );
}
export default Box;
import React from 'react';
import './District.css'


// single district component here 
const District = (props) => {

    // destructuring data from object 
    const {name,area,population,famous,img,devision} = props.district

    return (
        // every single card of single district 
        <div className="singleCard">
            <div className="img_container">
                <img src={img} alt="" />
            </div>

            {/* card body  */}
            <div className="cartBody">
                <h2>{name}</h2>
                <h2>Famous for: {famous}</h2>
                <div className="info">
                <h4>area : {area} km-squre,</h4>
                <h4>Division : {devision}</h4>
                </div>
                <h3>population : <span style={{fontSize:'25px'}}>{population}</span></h3>
                {/* onclick button for adding name and population  */}
                <button className="regularBTN" onClick={()=>props.addToCart(name,population)}>Add population</button>

                {/* fake button just for decorating card  */}
                <button className="regularBTN">Delete last item</button>
            </div>
        </div>
    );
};

export default District;
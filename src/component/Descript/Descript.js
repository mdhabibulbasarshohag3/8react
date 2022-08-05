import React from 'react';

// importing font awesome icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'

// variable for F.A icon 
const element = <FontAwesomeIcon icon={faBullhorn} />



// Description component

const Descript = () => {
    return (
        <div>
            <h1 style={{ color: '#153769' }}>Welcome to Bangladesh{element}</h1>
            <h2 style={{ color: 'rgb(26, 95, 224)' }}>Total population is : 200,000,000</h2>
        </div>
    );
};

// exporting component  
export default Descript;
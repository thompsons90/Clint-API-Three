import React, { useState } from 'react';
import Stock from './Stock';

function Button () {
    const [show, setShow]=useState(true);
 
    return (
        <div>
            <h1>Stocks Page</h1>
            <button onClick={() => {setShow(true); console.log(show)}
              } >Show API</button>
            <button onClick={() => setShow(false)}>Hide API</button>
            {
                show?<Stock/>:null
            }
            
        </div>
    )
}

export default Button;
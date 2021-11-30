import React, { useState } from 'react';
import Stock from './Stock';
import Requests from './Requests';

function Button () {
    const [show, setShow]=useState(true);
    const [shew, setShew]=useState(true);
    return (
        <div>
            <h1>Stocks Page</h1>
            <button onClick={() => setShow(true)}>Show A</button>
            <button onClick={() => setShow(false)}>Hide A</button>
            {
                show?<Stock/>:null
            }
            <h1>Requests Page</h1>
            <button onClick={() => setShew(true)}>Show B</button>
            <button onClick={() => setShew(false)}>Hide B</button>
            {
                show?<Requests/>:null
            }
        </div>
    )
}

export default Button;
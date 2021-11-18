import React, { useState } from 'react';

function Button () {
    const [show, setShow] = React.useState(true);
 
    return (
        <div>
            <h1>Stocks Page</h1>
            {
                show?<Stock/>:null
            }
            <button>Show API</button>
            <button>Hide API</button>
        </div>
    )
}

export default Button;
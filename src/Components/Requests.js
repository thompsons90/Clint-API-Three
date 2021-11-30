import React, { useEffect, useState } from 'react';
import Row from './Row';

const Requests = () => {
    const [data, setData] = useState([]);
        useEffect (() => {
            fetch("https://api.binance.com/api/v3/ticker/24hr")
            .then(res => res.json())
            .then(x => setData(x));
        },[])
    
    return (
        <div className="requests-container">
            {data.map(x=><Row symbol={x.symbol} highPrice={x.highPrice} lowPrice={x.lowPrice}/>)}
        </div>
    )
}

export default Requests;
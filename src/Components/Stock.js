import React, { useEffect, useState } from 'react';
import Row from './Row';

const Stock = () => {

  const [data, setData] = useState([]);
    useEffect  (() => {
      fetch("https://api.binance.com/api/v3/ticker/24hr") //We reach out to the api and get back a string, that string is res
      .then(res => res.json()) //res is the string we get from url and in json format, we take it and convert to JS object or array with .json
      .then(x => setData(x)); //x is an actual array, the second part of this line we need to use to set the state
    },[])
  //storing the info in a variable so that when I click show it doesn't do another call, updates on its own

    return ( 
       <div className="stock-container">
         {data.map(x=><Row symbol={x.symbol} priceChange={x.priceChange} priceChangePercent={x.priceChangePercent} />)}
       </div>
     ); //Create a break in the map to set number of iterations
}
 
export default Stock;
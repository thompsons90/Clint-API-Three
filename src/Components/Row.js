
const  Row = (props) => {
    return ( 
        <>
        <div>{props.symbol}</div>
        <div>{props.priceChange}</div>
        <div>{props.priceChangePercent}</div>
        <div>{props.highPrice}</div>
        <div>{props.lowPrice}</div>
        </>
     );
}
 
export default Row;
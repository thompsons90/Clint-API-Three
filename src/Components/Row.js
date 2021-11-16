
const  Row = (props) => {
    return ( 
        <>
        <div>{props.symbol}</div>
        <div>{props.priceChange}</div>
        <div>{props.priceChangePercent}</div>
        </>
     );
}
 
export default Row;
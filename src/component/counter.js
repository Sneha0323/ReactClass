import {useState} from "react";

function Counter(){
    const [number,setNumber] = useState(0);

    function HandlerClick(){
        setNumber(number+1);
        console.log(number)
    }
return(
    <div>
        <h3>{number}</h3>
        <button onClick={HandlerClick}>Count</button>
    </div>
)
}
export default Counter
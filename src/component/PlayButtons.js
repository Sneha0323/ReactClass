import './PlayButtons.css';

export default function PlayButtons({ongo,onpause,name}){
    let status=false
    function clickHandler(){
        if (status) onpause()
        else ongo();

        status = !status
    }
    return(
        <>
            <button onClick={clickHandler}>{name}{status?'>':'||'}</button>
        </  >
    )
}
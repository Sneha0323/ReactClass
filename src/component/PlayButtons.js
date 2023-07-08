import './PlayButtons.css';
import { useState } from 'react';

export default function PlayButtons({ongo,onpause,name}){
    const [status,setStatus]= useState(false)
    function clickHandler(){
        if (status){
            onpause();
        }
        else {
            ongo();
        }

        setStatus(!status)
    }
    return(
        <>
            <button onClick={clickHandler}>{name?'Play':'Pause'}{status ? '⏸': '▶️'}</button>
        </>
    )
}
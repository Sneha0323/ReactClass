// import Details from "./list";
import { useState } from "react";
import './Addnew.css'

function Addnew({newP}){
    const [addnew,setAddnew] =useState({
        like : '11',
            time : '10 month ago',
            verified:true
    })

    function handlerSubmit(e){
        e.preventDefault()
        newP(addnew)
        // console.log(addnew)

    }
    function handleInput(e){
    
         console.log(e.target.name,e.target.value)
        setAddnew({...addnew,
            [e.target.name]:e.target.value
        })

    }
return(
    <div>
        <form>
            <input type="text" placeholder="Title" name="title" onChange={handleInput}/>
            {/* {addnew.title} */}
            <input type="text" placeholder="Name" name="view" onChange={handleInput}/>
        </form>

        <button 
        onClick={handlerSubmit}

        >Add New</button> 
    </div>
)
}
export default Addnew;
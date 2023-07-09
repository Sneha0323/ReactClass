// import Details from "./list";
import { useEffect, useState } from "react";
import './Addnew.css'


    function Addnew({newP,updatePic,editablePic}){
        const initalState ={
            like : '',
                time : '10 month ago',
                verified:true,
        title:''
        }
    const [addnew,setAddnew] =useState(initalState)

    function handlerSubmit(e){
        e.preventDefault()
        if(editablePic){
            updatePic(addnew)
        }else{
            newP(addnew)
        }
       
        // console.log(addnew)
        setAddnew(initalState)
    }
    function handleInput(e){
    
         console.log(e.target.name,e.target.value)
        setAddnew({...addnew,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(editablePic){
            setAddnew(editablePic)
        }
            
         
        console.log('effect')
    },[editablePic])
return(
    <div>
        <form>
            <input 
            type="text" 
            placeholder="Title" 
            name="title"
            onChange={handleInput}
            value={addnew.title}
            />
            {/* {addnew.title} */}
            <input type="text"
            placeholder="like"
             name="like" 
             onChange={handleInput}
             value={addnew.like}
             />
        </form>

        <button 
        onClick={handlerSubmit}>{editablePic?'edit':'Add'} New</button> 
    </div>
)
}
export default Addnew;
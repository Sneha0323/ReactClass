import './App.css';
import Addnew from './component/Addnew';
import Pic from './component/Pic';
import PlayButtons from './component/PlayButtons';
import Details from './component/list';
import { useReducer, useState } from 'react';

function App() {
  const [newpic, dispatch] = useReducer(picReduser, Details)
  // const [newpic,setNewpic]= useState(Details)


  function picReduser(newpic, action) {
    switch (action.type) {
      case 'ADD':
        return [...newpic,
        { ...action.payload, id: newpic.length + 1 }
        ]
      case 'DELETE':
        return newpic.filter(addnew => addnew.id !== action.payload)

      case 'UPDATE':
        const index = newpic.findIndex(n => n.id === action.payload.id)
        const newPics = [...newpic]
        newPics.splice(index, 1, newpic)
        return newPics;

      default:
        return newpic
    }

  }



  const [editablePic, setEditablePic] = useState()

  function NewPic(addnew) {
    dispatch({ type: 'ADD', payload: addnew })
    //action ; {type:'ADD',payload:addnew}
    // setNewpic(
    //       [...newpic  , 
    //           {...addnew, id:newpic.length+1}
    //       ])
  }
  function deletePic(id) {
    // console.log(id);
    dispatch({ type: 'DELETE', payload: id })
    // setNewpic( newpic.filter(addnew=>addnew.id!==id))  
  }
  function editPic(id) {
    // dispatch({type:'EDIT',payload:id})
    setEditablePic(newpic.find(addnew => addnew.id === id))
    console.log(id);
  }
  function updatePic(addnew) {
    dispatch({ type: 'UPDATE', payload: addnew })
    // const index = newpic.findIndex(n=>n.id===addnew.id)
    // const newPics= [...newpic]
    // newPics.splice(index,1,newpic)
    // console.log(newPics)
    // setNewpic(newpic)
  }
  return (
    <div className="App">
      <div>
        {/* <button onClick={()=>setNewpic(
          [...newpic, {
            id:newpic.length+1,
            title : 'Java',
            like : '11',
            time : '10 month ago',
            verified:true
        }]
        )}>Add new</button> */}
      </div>
      {
        newpic.map(Detail => <Pic
          key={Detail.id}
          id={Detail.id}
          title={Detail.title}
          like={Detail.like}
          time={Detail.time}
          verified={Detail.verified}
          deletePic={deletePic}
          editPic={editPic}>
          <PlayButtons name="Play" ongo={() => console.log('Play click')} onpause={() => console.log('Pause click')} />
        </Pic>)
      }
      {/* <Counter/> */}
      <Addnew newP={NewPic} editablePic={editablePic} updatePic={updatePic}></Addnew>
    </div>
  );

}

export default App;

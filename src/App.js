import './App.css';
import Addnew from './component/Addnew';
import Pic from './component/Pic';
import PlayButtons from './component/PlayButtons';
import Details from './component/list';
import { useState } from 'react';

function App() {
  const [newpic,setNewpic]= useState(Details)

  function NewPic(addnew){
    setNewpic(
          [...newpic  , 
              {...addnew, id:newpic.length+1}
          ])
      }
  return (
    <div className="App">
      <div>
        <button onClick={()=>setNewpic(
          [...newpic, {
            id:newpic.length+1,
            title : 'Java',
            like : '11',
            time : '10 month ago',
            verified:true
        }]
        )}>Add new</button>
      </div>
      {
        newpic.map(Detail=> <Pic 
          key={Detail.id}
          id={Detail.id}
          title={Detail.title}
          like={Detail.like}
          time={Detail.time}
           verified={Detail.verified}>
          <PlayButtons name="Play" ongo={()=>console.log('Play click')} onpause={()=>console.log('Pause click')}/>
        </Pic>)
        }
   {/* <Counter/> */}
   <Addnew newP={NewPic}></Addnew>
    </div>
  );

}

export default App;

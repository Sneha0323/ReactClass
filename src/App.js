import './App.css';
import Pic from './component/Pic';
import PlayButtons from './component/PlayButtons';
import Details from './component/list';

function App() {
  

  return (
    <div className="App">
      {
        Details.map(Detail=> <Pic 
          key={Detail.id}
          id={Detail.id}
          title={Detail.title}
          like={Detail.like}
          time={Detail.time}
          verified={Detail.verified}/>)
      }
      <div>
   <PlayButtons name="Play" ongo={()=>console.log('Play click')} onpause={()=>console.log('Pause click')}/>
   {/* <PlayButtons name="Pouse" onpause={()=>alert('Pause click')}/> */}
   </div>
    </div>
  );

}

export default App;

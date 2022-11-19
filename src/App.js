import './App.css';
import {React,useState} from 'react'

function App() {
  const [points,setPoints] = useState([])
  const [popup,setPopup] = useState([])

  function handleCLick(e){
   
    console.log()
    setPoints([...points,{
      x:e.clientX,
      y:e.clientY
    }]
    
    );
  }
  function HandleDelete(e){
    setPopup(points.pop())
  }
  return (
    <>
    <button className='delete' onClick={HandleDelete}>Delete</button>
    
    <div className="App" onClick={handleCLick}>
      {points.map((point)=>
      
      <div className='point' style={{position:'absolute',left:point.x-10,top:point.y-20}}>O</div>
      )

      }
      
    </div>
    </>
  );

}

export default App;

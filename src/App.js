import "./App.css";
import { React, useState } from "react";

function App() {
  const [points, setPoints] = useState([]);
  const [popped, setPopped] = useState([]);

  function handleCLick(e) {  //Update points array ( adding new points to points array state)
    setPoints([
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
  }
  function HandleDelete() {
    const newPoints = [...points];          // create a copy of points
    const poppedPoint = newPoints.pop();    // save a copy of deleted points so when we pop point later we don't lose it
    if (poppedPoint) {                      // if all point deleted we can't  execute next code                
      setPopped([...popped, poppedPoint]);  // save the new popped points with old popped points
      setPoints(newPoints);                 // we set the new form of our points after deleting them
    }
  }
  function HandleUndo() {
    const newPopped = [...popped];          // save all deleted points in new array
    const poppedPoint = newPopped.pop();    // remove a point from poppped points array and save it in popped point
    if (poppedPoint) {                      // if there is no point to unDO we stop
      points.push(poppedPoint);             // we push the popped point from popped array to our points array
      setPoints(points);                    // update our points array state
      setPopped(newPopped);                 // update our popped points array state
    }
  }
  return (
    <>
      <button className="delete" onClick={HandleDelete}>
        Delete
      </button>
      <button className="delete" onClick={HandleUndo}>
        Undo
      </button>

      <div className="App" onClick={handleCLick}>
        {points.map((point) => (
          <div
            className="point"
            style={{
              position: "absolute",
              left: point.x - 10,
              top: point.y - 20,
            }}
          >
            O
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
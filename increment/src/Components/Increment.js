import { useState } from 'react';
import './incrent.css';

function Increment() {

    const [num, setNum] = useState(0)

    const numInc = () =>{
        setNum(num + 1);
    }

    const numDec = () =>{
if (num > 0){
    setNum(num - 1);
}else{
    alert("sorry, zero number reached")
    setNum(0);
}
    }
    return (
        <>

        
        <div className="mainDiv">
        <h1>hello this is my increment/decrement</h1>
            <div className="centerDiv">
                <h1>{num}</h1>
                <div className="btnDiv"></div>
                <button onClick={numInc}> Increment</button>
                <button onClick={numDec}> Decrement</button>

            </div>

        </div>
        


        </>
     
    );
  }
  
  export default Increment;
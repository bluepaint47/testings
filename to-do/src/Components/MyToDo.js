import { useState } from 'react';
import './todo.css'
function MyToDo() {

  const [name, setName] = useState('')
  const [students, setStudents] = useState([])



const handleChange = (event) =>{
event.preventDefault();
if (!name){

}else{
setStudents(currentstudents => [...currentstudents,name])
setName('');

}

}

const handledelete = (id) => {
const newstudents = students.filter((student,index) => id !== index);
setStudents(newstudents);
}

const removeAll = () =>{
  setStudents([]);
}
  return ( 
  <>
  <div className="my-app">
    <form onSubmit={handleChange}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
        <input type="submit"></input>
    </form>

    <ul>
      {
        students.map((teach,index) => <li key={index}>{teach} <button onClick={() => handledelete(index)}> Delete</button></li> )
      }
    </ul>

    <button onClick={removeAll}>remove all</button>

  </div>
  </>
  );
}

export default MyToDo;

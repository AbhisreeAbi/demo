import {useState} from 'react'

function App() {
  const[count,setCount]=useState(0)
   function addCount(){
     setCount(count+1)
     console.log(count);  
   }
  
return(
  <div>
    <button onClick={addCount}>ADD</button>
    <h1>Counter:{count}</h1>
  </div>
  
);
}

export default App;
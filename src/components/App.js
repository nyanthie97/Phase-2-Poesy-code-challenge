import React, { useEffect, useState } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems,setPoems]=useState([])
  const [showForm,setShowForm]=useState(false)
  useEffect(()=>{
    fetch('http://localhost:8004/poems')
    .then(r=>r.json())
    .then(poems=>setPoems(poems))
  },[])
  function handleShowForm(){
    setShowForm(showForm=>showForm=!showForm)
  }
  function handleNewPoem(newPoem){
//post the new poem to server-- fetch POST
//update the list --use state variable
const serverOptions={
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(newPoem)
}
fetch('http://localhost:8004/poems',serverOptions)
.then(r=>r.json())
.then(aPoem=>setPoems(poems=>[...poems,aPoem]))
.catch(err=>console.log(err))
  }
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={handleShowForm}>{showForm?"Hide":"Show"} new poem form</button>
        {showForm ? <NewPoemForm onSubmission={handleNewPoem}/> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
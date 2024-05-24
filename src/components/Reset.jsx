import React from 'react'

function Reset({setFilterName, setFilterStatus, setFilterSpecies}) {
    const handleReset=(event)=>{
        event.preventDefault();
        setFilterName("");
        setFilterStatus("all");
        setFilterSpecies("all")
    }
  return (
    <div className='reset-container'>
        <button className='reset' onClick={handleReset}>Reset</button>
    </div>
   
  )
}

export default Reset
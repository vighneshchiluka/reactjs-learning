import React, { useState } from 'react'

const App = () => {

const submitHandler=(e)=>{
  e.preventDefault()
  console.log("Form is submitted by",title)
  setTitle('')
  // for input empty after submit we set setTitle('')
}

  const [title, setTitle] = useState('')  
  // setTitle value is change and reflect in title

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e) 
      }}>
        <input onChange={(e)=>{
          setTitle(e.target.value)
        }} value={title} type="text" placeholder='Enter Your Input' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {

const submitHandler = (e)=>{
  e.preventDefault()
  console.log("Form is Submitted")
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Your Input' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

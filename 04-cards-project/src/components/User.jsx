import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <div style={{color:'white'}}>{props.name},{props.age}</div>  
  )
}

export default User
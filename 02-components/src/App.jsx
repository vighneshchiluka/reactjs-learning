import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Vighnesh Chiluka</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      </div>

      {Card()}
    </div>
  )
}

export default App
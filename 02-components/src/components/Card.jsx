import React from 'react'

const Card = () => {

    const user = 'Vighnesh Chiluka'
    const age = 25
    const profession = 'Front End Developer'

    return (
        <div>
            <div className='card'>
                <h1>Hello, Guys I'm {user}</h1>
                <h2>And I'm {age} years old</h2>
                <h3>I'm {profession}</h3>
            </div>
        </div>
    )
}

export default Card
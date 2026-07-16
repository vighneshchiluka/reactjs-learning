import React from 'react'

const Card = (props) => {
    // console.log(props) - object we got in console we can use anyname props or tops
    
    // console.log(props.user,props.age) - printing both values in props method

    return (
        <div className="card">
            <img src={props.img} alt={props.alt} />
            <h1>{props.user}, {props.age}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
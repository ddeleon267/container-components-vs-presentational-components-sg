import React from 'react'

const Category = (props) => {
    
    return (
        <button id={props.category} onClick={props.handleClick}>{props.category}</button>
    )
}

export default Category


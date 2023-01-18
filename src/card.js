import React from 'react'

 const Card = ({object}) => {
  return (
    <div>
        
        <h2>{object.name}</h2>
        <p>{object.email}</p>
    </div>
  )
}

export default Card
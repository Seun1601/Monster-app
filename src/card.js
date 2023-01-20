import React from 'react'

 const Card = ({object}) => {
  return (
    <div className='bg-blue-400 m-6 w-80  flex flex-col items-center justify-end p-11'>
        <img src={`https://robohash.org/${object.id}?set=set2&size=200x200`} className="mb-6"></img>
        <h2 className='font-bold text-xl mb-6'>{object.name}</h2>
        <p>{object.email}</p>
    </div>
  )
}

export default Card
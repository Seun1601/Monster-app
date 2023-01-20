import React from 'react'

const Inputb= ({changeText}) => {
  return (
    <div>
       <input type='text' className="h-12 w-56 m-12 p-3" placeholder='Search monster' onChange = {changeText} /> 
    </div>
  )
}

export default Inputb
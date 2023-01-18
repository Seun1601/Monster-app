import React from 'react'

const Inputb= ({changeText}) => {
  return (
    <div>
       <input type='text' placeholder='Search monster' onChange = {changeText} /> 
    </div>
  )
}

export default Inputb
import React from 'react'

const Passing_Comp_as_Children = ({children}) => {
  return (
    <div className='d-flex justify-content-center' style={{gap:'0.5rem'}}>{children}</div>
  )
}

export default Passing_Comp_as_Children
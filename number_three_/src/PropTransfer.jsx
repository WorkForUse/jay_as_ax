import React from 'react'

const PropTransfer = ({transferData , index}) => {
  return (
    <>
        <li className="list-group-item"> {index} {" "} {transferData.company} {" "} {transferData.product}</li>
    </>
  )
}

export default PropTransfer
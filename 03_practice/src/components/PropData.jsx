import React from 'react'
import Proptransfer from './Proptransfer'

const PropData = () => {

    let fruits = ["orange","apple","banana","berry"]

  return (
    <div>
        <ul className="list-group">
            {fruits.map((vl,uki) => (
                <Proptransfer key={uki} title={vl}/>
            ))}
        </ul>
    </div>
  )
}

export default PropData
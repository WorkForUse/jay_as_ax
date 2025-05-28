import React from 'react'

const Addtodo = () => {

    let arraydata = [
        {data:"Lorem ipsum dolor sit amet first." , date: '10-Feb-2022'},
        {data:"Lorem ipsum dolor sit amet second." , date: '05-Aug-2015'},
    ]

  return (
    <div className='row'>

        <div class="col">
          <input type="text" placeholder="Enter Todo" /> <hr />
          {arraydata.map((txtVal,index)=>{
            return <><div key={index}>{txtVal.data}</div><hr /></>
        })}
        </div>
        <div class="col">
          <input type="date" /> <hr />
          {arraydata.map((dtVal,idx)=>{
            return <><div key={idx}>{dtVal.date}</div><hr /></>
          })}
        </div>
        <div class="col">
          <button type="button" class="btn btn-dark"> Add </button> <hr />
          <button type="button" class="btn btn-secondary"> Delete </button> <hr /> 
          <button type="button" class="btn btn-secondary"> Delete </button>
        </div>

    </div>
  )
}

export default Addtodo
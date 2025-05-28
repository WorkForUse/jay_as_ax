import React from "react";

const Mmethod = () => {

    const detailS = ["suzuki","kawasaki","honda","mitsubishi"]
    // const detailS = []
    // if (detailS.length === 0) {
    //         return <h3>please enter some values</h3>
    // } else {
    //         null
    // }

  return (
    <>
        {/* { detailS.length != 0 ?
        <ul className="list-group list-group-flush card" style={{'width' : '18rem'}}>
            {detailS.map((valuE,index)=>(
                  <li key={index} className="list-group-item">{index} {" "} {valuE}</li>
            ))}
        </ul> : "please enter some value"} */}
        { detailS.length !== 0 && (
            <>
        <h3>Data Proceed Successfully</h3>
        <ul className="list-group list-group-flush card" style={{'width' : '18rem'}}>
            {detailS.map((valuE,index)=>(
                  <li key={index} className="list-group-item">{index} {" "} {valuE}
                  </li>
                ))}
        </ul>
    </>
  )}
  </>
  );
};

export default Mmethod;




















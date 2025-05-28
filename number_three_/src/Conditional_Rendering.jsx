import React from "react";

const Conditional_Rendering = () => {
  const arrData = [
    { color: "red", city: "arkansa" },
    { color: "blue", city: "kansas" },
    { color: "white", city: "wichita_kansas" },
    { color: "skyblue", city: "sasketchwan" },
    { color: "orangeRed", city: "calgary" },
  ];

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
        {arrData.length != 0 && (
            <>
            <center>
                <h1>Data Proceed Successfully</h1>
            </center>
        <ul className="list-group list-group-flush">
          {arrData.map((vldata, index) => (
            <li className="list-group-item" key={index}>{index} ~ {vldata.color} ~ {vldata.city}</li>
          ))}
        </ul>
            </>
        )}
      </div>
    </>
  );
};

export default Conditional_Rendering;

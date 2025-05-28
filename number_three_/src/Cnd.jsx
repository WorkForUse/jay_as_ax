import React from "react";

const Cnd = () => {
  const arrData = [
    { class: "Elite", city: "wb" },
    { class: "Premuim", city: "ks" },
    { class: "Superior", city: "as" },
    { class: "Standard", city: "zx" },
    { class: "universal", city: "dl" },
  ];

  return (
    <>
      <div className="card" style={{width: '18rem'}}>
            <center>
                <h1>Data Proceed Successfully</h1>
            </center>
        <ul className="list-group list-group-flush">
            {}
          {arrData.map((vldata, index) => (
            <li className="list-group-item" key={index}>{index} ~ {vldata.class}
                {vldata.class.length != 0 && (
                    <h3>{vldata.city}</h3>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cnd;

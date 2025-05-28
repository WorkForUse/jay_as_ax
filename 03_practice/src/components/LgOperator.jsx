import React from 'react';

const LgOperator = ({ handleBuybtnOnCLick, HandleOnKeyDown, textHighlight, fullData }) => {
  return (
    <center>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '24rem',
          flexDirection: 'column'
        }}
        className="card"
      >
        <h3>Data Proceed Successfully</h3>
        <hr />

        {/* Input field */}
        <input
          type="text"
          onKeyDown={HandleOnKeyDown}
          placeholder="Enter company & press Enter"
          style={{
            border: '5px solid navy',
            margin: '10px 0px',
            padding: '10px',
            width: '90%'
          }}
        />

        {/* Display entered data */}
        <div
          style={{
            margin: '10px 0px',
            fontWeight: 'bolder',
            width: '90%',
            textAlign: 'left'
          }}
        >
          <h5>Entered Data:</h5>
          {textHighlight && textHighlight.length > 0 ? (
            <ul style={{ paddingLeft: '20px' }}>
              {textHighlight.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p style={{ fontStyle: 'italic', color: 'gray' }}>No data entered yet.</p>
          )}
        </div>

        {/* List with Buy buttons */}
        <ul className="list-group list-group-flush" style={{ width: '100%' }}>
          {fullData.map((record, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div style={{ textDecoration: record.isBought ? 'line-through' : 'none' }}>
                {index}. {record.dataRecord} - {record.Products}
              </div>
              {!record.isBought && (
                <button
                  onClick={() => handleBuybtnOnCLick(record)}
                  type="button"
                  className="btn btn-dark btn-sm"
                >
                  Buy
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
};

export default LgOperator;
import React from "react";

const AppTime = () => {
  // let date = '26/11/2023';
  let daTe = new Date();
  // let time = '03:45:00 PM';
  let Time = daTe.toLocaleTimeString();

  return (
    // <div>Current time is : {date} ~ {time}</div>
    <>
      <div>
        <h3>
          Current time is : {daTe.toDateString()} ~ {Time}
        </h3>
      </div>
    </>
  );
};

export default AppTime;

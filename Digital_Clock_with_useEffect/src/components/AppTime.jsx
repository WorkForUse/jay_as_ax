import { useState,useEffect } from "react";

const AppTime = () => {
  const [Time,setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval started");
    const intervalID = setInterval(()=>{
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalID)
      console.log("Cancelled Interval");
    }
  }, [])
  

  return (
    <>
      <div>
        <h3>
          Current time is : {Time.toDateString()} ~ {Time.toLocaleTimeString()}
        </h3>
      </div>
    </>
  );
};

export default AppTime;
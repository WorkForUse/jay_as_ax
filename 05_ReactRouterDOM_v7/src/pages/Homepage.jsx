import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Homepage = () => {

  // const [data,setData] = useState([])
  // const fetchApi = async()=>{
  //   const response = await((await fetch('https://jsonplaceholder.typicode.com/todos')).json());
  //   setData(response)
  // }
  // useEffect(()=>{
  //   fetchApi()
  // },[])

  const data = useLoaderData()

  return (
    <div>
      <center>
        <h3>HOME PAGE</h3>
        <strong>{JSON.stringify(data)}</strong>
      </center>
    </div>
  );
};

export default Homepage;

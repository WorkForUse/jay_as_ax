import { useRef, useState } from "react";
import Passing_Comp_as_Children from "./Passing_Comp_as_Children";
import { MdAddBox } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Maindata = ({ DataTransfer, todoList, onDelete }) => {
  // useState useRef kay baad comment hogae
  // const [inputValue, setInputValue] = useState("");
  // const [date, setDate] = useState("");
  // now using useRef
  const toNameRefElement = useRef();
  const toDateRefElement = useRef();

  // yeah do function bhi kyonkay ab useState use nhi ho rha to inki kyon zaroorat nhi hai
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDate(event.target.value);
  // };
  // yeah after useRef hook use may nhi ayengay

  // const handleAdd = () => {
  //   if (inputValue.trim() !== "") {
  //     DataTransfer({ text: inputValue, date: date });
  //     setInputValue("");
  //     setDate("");
  //   } // nichay dia gaya function m0dified function hai jo form kay saath likha gaya hai 

  // const handleAdd = (event) => {
  //   if (inputValue.trim() !== "") {
  //     DataTransfer({ text: inputValue, date: date });
  //     event.preventDefault();
  // setInputValue("");
  //     setDate("");
  //   } 
  // }; // idhar jo setInputValue aur setDate hai yeah useState ka part hai to iski bhi ab zaroorat nhi

  const handleAdd = (event) => {
    event.preventDefault();

    const toDOTextData = toNameRefElement.current.value;
    const toDODateData = toDateRefElement.current.value;

    if (toDOTextData.trim() !== "") {
      DataTransfer({ text: toDOTextData, date: toDODateData });
      toNameRefElement.current.value = "";
      toDateRefElement.current.value = "";
    }
  };


  return (
    // <div className="container w-50 m-auto border border-dark">
    <form className="container w-50 m-auto border border-dark" onSubmit={handleAdd}>
      <h1 className="fs-1 fw-lighter fst-italic text-center">Todo App</h1>

      <Passing_Comp_as_Children>
        {/* <input
          type="text"
          placeholder="Enter todo"
          style={{ border: "5px solid black", fontWeight: "bolder" }}
          className="m-auto w-50 p-3"
          value={inputValue}
          onChange={handleInputChange}
        /> */}

        <input
          type="text"
          placeholder="Enter todo"
          style={{ border: "5px solid black", fontWeight: "bolder" }}
          className="m-auto w-50 p-3"
          ref={toNameRefElement}
        />

        {/* <input
          type="date"
          style={{ border: "5px solid black", fontSize: "20px" }}
          className="m-auto w-50 p-3 my-3"
          value={date}
          onChange={handleDateChange}
        /> */}

        <input
          type="date"
          style={{ border: "5px solid black", fontSize: "20px" }}
          className="m-auto w-50 p-3 my-3"
          ref={toDateRefElement}
        />

        {/* <button
          // type="submit"
          // type="button"
          type="button" // button ka type default submit hi hota hai agar nhi bhi likho
          className="btn btn-outline-success btn-sm h-100 m-auto p-4 border border-3 border-dark"
          onClick={handleAdd}
        > */}
        <button
          type="submit"
          className="btn btn-outline-success btn-sm h-100 m-auto p-4 border border-3 border-dark">
          <MdAddBox className="fs-4" />
        </button>

      </Passing_Comp_as_Children>

      <ul className="list-group mt-3">
        {todoList.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.text}</strong> — {item.date}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(index)}
            >
              <RiDeleteBin5Fill />
            </button>
          </li>
        ))}
      </ul>
    </form>
    // </div> // yahan jo form ka tag dia hai yeah pehlay div tha issay modified kia gaya hai
  );
};

export default Maindata;
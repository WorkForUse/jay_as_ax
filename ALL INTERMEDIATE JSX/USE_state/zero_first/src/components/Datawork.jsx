import { useState } from "react"

const Datawork = ({ addTodo, addTodoItem, deleteTodo }) => {
  const [addValueText, setValueText] = useState("");
  const [addValueDate, setValueDate] = useState("");

  const HandleTextAdd = (event) => {
    setValueText(event.target.value);
  }

  const HandleDateSet = (event) => {
    setValueDate(event.target.value);
  }

  const handleAdded = () => {
    if (addValueText.trim() !== "") {
      addTodo({ inputData: addValueText, daTe: addValueDate });
      setValueText("");
      setValueDate("");
    }
  }

  return (
    <div className="container p-5 m-auto">
      {/* add set value section */}
      <input type="text" value={addValueText} onChange={HandleTextAdd} />
      <input type="date" value={addValueDate} onChange={HandleDateSet} />
      <button type="button" onClick={handleAdded} className="btn btn-primary btn-sm">Add Todo</button>
      <hr className="w-50" />
      
      <div style={{ width: "18rem" }}>
        <ul className="d-flex flex-column justify-content-center gap-2">
          {addTodoItem.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                <span>{item.inputData} ___ {item.daTe}</span>
                <button onClick={() => deleteTodo(index)} type="button" className="btn btn-danger btn-sm ms-2">Delete Todo</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Datawork;

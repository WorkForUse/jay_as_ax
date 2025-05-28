import { useState } from "react";
import Maindata from "./components/Maindata";

const App = () => {
  const [addTodoList, setAddTodo] = useState([]);

  const addTodo = (newItem) => {
    setAddTodo([...addTodoList, newItem]);
  };

  const deleteTodo = (indexToDelete) => {
    const updatedList = addTodoList.filter((_, index) => index !== indexToDelete);
    setAddTodo(updatedList);
  };

  return (
    <>
    <div>
      <Maindata
        DataTransfer={addTodo}
        todoList={addTodoList}
        onDelete={deleteTodo}
      />
    </div>
    </>
  );
};

export default App;

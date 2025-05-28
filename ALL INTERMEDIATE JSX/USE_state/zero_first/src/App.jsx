import { useState } from "react"
import Datawork from "./components/Datawork"

const App = () => {
  const [todoAdd, setTodoAdd] = useState([]);

  const handleAdd = (newItem) => {
    setTodoAdd([...todoAdd, newItem]);
  }

  const handleDelete = (deleteIndex) => {
    const updateData = todoAdd.filter((_, index) => index !== deleteIndex);
    setTodoAdd(updateData);
  }

  return (
    <div>
      <Datawork addTodoItem={todoAdd} addTodo={handleAdd} deleteTodo={handleDelete} />
    </div>
  );
}

export default App

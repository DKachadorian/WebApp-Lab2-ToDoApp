import UserBar from "./user/UserBar";
import ToDoList from "./post/ToDoList";
import CreateToDo from "./post/CreateToDo";
import { useState } from "react";

function App() {
  const initialToDos = [];

  const [user, setUser] = useState("");
  const [toDos, setToDos] = useState(initialToDos);

  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      <br />
      <ToDoList toDos={toDos} setToDos={setToDos} />
      {user && <CreateToDo user={user} toDos={toDos} setToDos={setToDos} />}
    </div>
  );
}

export default App;
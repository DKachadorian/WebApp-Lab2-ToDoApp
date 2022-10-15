import ToDos from "./ToDos";

export default function ToDoList({ toDos = [] }) {
  // how to implement the Toggle todo and delete todo !!!!!!!!!!
  return (
    <div>
      {toDos.map((t, i) => (
        <div>
          <ToDos {...t} key={t.id} />
        </div>
      ))}
    </div>
  );
}

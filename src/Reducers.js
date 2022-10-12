function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
}

function toDoReducer(state, action) {
  switch (action.type) {
    case "CREATE_TODO":
      const newToDo = {
        title: action.title,
        content: action.content,
        author: action.user,
        description: action.description,
        dateCreated: action.dateCreated,
        complete: action.complete,
        dateCompleted: action.dateCompleted,
      };
      return [newToDo, ...state];

    // add the delete todo component
    case "DELETE_TODO":
      return state.filter((state) => state.id !== action.id);

    default:
      return state;
  }
}

export default function appReducer(state, action) {
  return {
    user: userReducer(state.user, action),
    toDos: toDoReducer(state.toDos, action),
  };
}

import { toast } from "react-toastify";

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.todos.data;
    case "ADD_TODO":
      toast.success("A todo item was added", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return [action.todo.data, ...todos];
    case "UPDATE_TODO":
      toast.success("A todo item was updated", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "CHECK_TODO":
      toast.success("A todo item status was updated", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_TODO":
      toast.success("A todo item has been deleted", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return todos.filter((todo) => todo._id !== action.id);
    case "CLEAR_TODOS":
      return [];
    default:
      return todos;
  }
};

export default todoReducer;

import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // todos: [{
    //         id: "1",
    //         title: "react test",
    //         completed: false
    //     }],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    toggleComplete: (id) => {},
    deleteTodo: (id) => {},
});
export const useTodo = () => {
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
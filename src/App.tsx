import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
// I would personally create a folder model (at same level as app.tsx) and include a file todo.d.ts or todo.ts and add the interface there.
import { Todo } from './todo.model';

// this dummy project was launched with Create React App + TS - it does type checking every time I save. How does it work with Vite? 
// I guess there are some settings that need to be adjusted

// Avoid using React.FC<T> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const App = () => {
  // Todo[] -> imported from todo.model.ts
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;

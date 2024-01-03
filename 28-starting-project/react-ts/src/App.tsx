import { useState } from 'react';

import { NewTodo } from './components/NewTodo';
import { Todos } from './components/Todos'
import { Todo } from './domain/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((todos) => {
      return todos.filter((data) => data.id !== todoId);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;

import { useState } from 'react';

import { NewTodo } from './components/NewTodo';
import { Todos } from './components/Todos'
import { Todo } from './domain/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [count, setCount] = useState(1);

  const addTodoHandler = (todoText: string) => {
    setCount(count + 1);
    const newTodo = new Todo(count, todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodos((todos) => {
      return todos.filter((data) => data.id !== todoId);
    });
  }

  const updateTodoHandler = (todoIdx: number, todoText: string) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.idx === todoIdx) {
          return { ...todo, text: todoText };
        }
        return todo;
      });
      return updatedTodos;
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} onUpdateTodo={updateTodoHandler}/>
    </div>
  );
}

export default App;

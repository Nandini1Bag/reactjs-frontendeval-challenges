import React, { useState, useEffect } from 'react';

const App = () => {
  // State to hold the value of the new todo input
  const [todoValue, setTodoValue] = useState('');
  // State to hold the list of todos,initialized from local storage if available
  const [todolist, setTodolist] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // State to hold the current filter
  const [filter, setFilter] = useState('all');

  // Effect to persist the todos in local storage whenever the todo list changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todolist));
  }, [todolist]);

  // Function to add a new todo to the list
  const addTodo = () => {
    if (todoValue.trim()) {
      setTodolist([...todolist, { text: todoValue, completed: false }]);
      setTodoValue('');
    }
  };

   // Function to toggle the completed state of a todo
  const toggleComplete = (index) => {
    const updatedTodos = todolist.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodolist(updatedTodos);
  };
  // Function to delete a todo by index
  const deleteTodo = (index) => {
    const updatedTodos = todolist.filter((_, i) => i !== index);
    setTodolist(updatedTodos);
  };

  // Function to filter todos based on the selected filter
  const filteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todolist.filter(todo => todo.completed);
      case 'active':
        return todolist.filter(todo => !todo.completed);
      default:
        return todolist;
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="actions">
        <input
          type="text"
          value={todoValue}
          placeholder="Add todo"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul className='todolists'>
        {filteredTodos().map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

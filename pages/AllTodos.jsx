import { useState } from 'react'
import TodoItem from '../components/TodoItem'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function AllTodos({ todos, addTodo, toggleTodo, deleteTodo, setTheme, theme }) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      addTodo(newTodo)
      setNewTodo('')
    }
  }

  return (
    <div className="page">
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <h1>All Tasks</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task..."
        />
        <button type="submit">Add</button>
      </form>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}
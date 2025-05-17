import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AllTodos from './pages/AllTodos'
import ActiveTodos from './pages/ActiveTodos'
import CompletedTodos from './pages/CompletedTodos'
import './index.css'

export default function App() {
  const [todos, setTodos] = useState([])
  const [theme, setTheme] = useState('light')

  const addTodo = (text) => {
    setTodos([...todos, { 
      id: Date.now(), 
      text, 
      completed: false 
    }])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/" element={
          <AllTodos 
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            setTheme={setTheme}
          />
        } />
        <Route path="/active" element={
          <ActiveTodos 
            todos={todos.filter(t => !t.completed)}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        } />
        <Route path="/completed" element={
          <CompletedTodos 
            todos={todos.filter(t => t.completed)}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        } />
      </Routes>
      <Navbar />
    </div>
  )
}
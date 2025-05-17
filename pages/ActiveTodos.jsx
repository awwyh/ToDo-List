import TodoItem from '../components/TodoItem'

export default function ActiveTodos({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="page">
      <h1>Active Tasks</h1>
      <div className="todo-list">
        {todos.length > 0 ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p>No active tasks</p>
        )}
      </div>
    </div>
  )
}
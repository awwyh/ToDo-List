import TodoItem from '../components/TodoItem'

export default function CompletedTodos({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="page">
      <h1>Completed Tasks</h1>
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
          <p>No completed tasks</p>
        )}
      </div>
    </div>
  )
}
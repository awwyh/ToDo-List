export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="todo-text">{todo.text}</span>
        <button 
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          ×
        </button>
      </div>
    )
  }
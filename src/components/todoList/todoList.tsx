import './todo.css'

export default function TodoList(){

  return (
    <div className="todo-list">
      <input type="text" placeholder="Pesquisar" />
      <ul>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
        <li>Tarefa 1</li>
        <li>Tarefa 2</li>
        <li>Tarefa 3</li>
        {/* adicione mais tarefas aqui */}
      </ul>
      
    </div>
  );
}

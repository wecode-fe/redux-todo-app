import { useSelector } from 'react-redux';
import AddTask from './AddTask';
import './App.css';
import Task from './Task';

function App() {
  const tasks = useSelector(s => s.tasks.tasks);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App</h2>
        <AddTask />
        {tasks.map((t, i) => {
          return <Task task={t.task} id={t.id} key={t.id} done={t.isDone} />
        })
        }
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import List from './components/List';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([
        { id: 1, description: 'Learn React', completed: true },
        { id: 2, description: 'Learn JSX', completed: false },
        { id: 3, description: 'Build a React App', completed: false }
    ]);

    return (
        <div className='page'>     
            <List heading='My Tasks' tasks={tasks} setTasks={setTasks}/>
        </div>
    );
}

export default App;

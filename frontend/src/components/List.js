import { useState } from 'react';

function Task(props) {

	console.log(props);

	function onChange() {
		// Find the task we want to update and update it
		props.setTasks(tasks => tasks.map(task => {
			if (task.id === props.id) {
				return {
					id: task.id,
					description: task.description,
					completed: !task.completed
				};
			} else {
				return task;
			}
		}));
	}

	function onClick() {
		// Find the task we want to delete and remove it
		props.setTasks(tasks => tasks.filter(task => task.id !== props.id));
	}

	return (
		<li><button type="button" onClick={onClick}>X</button> { props.description } <input type="checkbox" checked={props.completed} onChange={onChange}/></li>
	);
}

function List(props) {

	const [newTask, setNewTask] = useState("");

	function onChange(event) {
		setNewTask(event.target.value);
	}

	function onClick() {
		fetch('http://localhost/api/tasks', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: newTask, completed: false })
        })
            .then(response => response.json())
            .then(data => {
                props.setTasks(tasks => [...tasks, data]);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        setNewTask("");  // Clear the input field
	}

	return (
		<div>
			<h1>{ props.heading }</h1>
			<input type="text" placeholder="Add a new task" onChange={onChange} />
			<button type="button" onClick={onClick}>Add</button>
			<ul>
				{ props.tasks.map(task => <Task setTasks={props.setTasks} id={task.id} description={task.description} completed={task.completed} />) }
			</ul>
		</div>
	);
}

export default List;

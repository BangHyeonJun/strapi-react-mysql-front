import React, { useState } from "react";
import TaskManager from "./components/TaskManager";

function App() {
	const [todoList, setTodoList] = useState([]);

	const changeTaskToComplete = ({ id }) => {};

	const changeTaskToUnComplete = ({ id }) => {};

	const appendTaskInToDoList = ({ title }) => {};

	const deleteTaskInToDoList = ({ id }) => {};

	return (
		<div className="App">
			<TaskManager
				onComplete={changeTaskToComplete}
				onUnComplete={changeTaskToUnComplete}
				onAppend={appendTaskInToDoList}
				onDelete={deleteTaskInToDoList}
				todoList={todoList}
			></TaskManager>
		</div>
	);
}

export default App;

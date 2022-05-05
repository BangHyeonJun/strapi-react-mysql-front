import React, { useEffect, useState } from "react";
import TaskManager from "./components/TaskManager";
import axios from "axios";

function App() {
	const [todoList, setTodoList] = useState([]);

	useEffect(() => {
		updateTodoList();
	}, []);

	const updateTodoList = async () => {
		const { data } = await fetchTodoList();
		setTodoList(data);
	};

	const fetchTodoList = async () => {
		const { data } = await axios.get(`http://localhost:1337/api/todos`);
		return data;
	};

	const changeTaskToComplete = (id) => async () => {
		await axios.put(`http://localhost:1337/api/todos/${id}`, {
			data: {
				complete_yn: true,
			},
		});
		updateTodoList();
	};

	const changeTaskToUnComplete = (id) => async () => {
		await axios.put(`http://localhost:1337/api/todos/${id}`, {
			data: {
				complete_yn: false,
			},
		});
		updateTodoList();
	};

	const appendTaskInToDoList = async (title) => {
		await axios.post(`http://localhost:1337/api/todos`, {
			data: {
				title: title,
				complete_yn: false,
			},
		});
		updateTodoList();
	};

	const deleteTaskInToDoList = (id) => async () => {
		await axios.delete(`http://localhost:1337/api/todos/${id}`);
		updateTodoList();
	};

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

import React from "react";
import "./TaskManager.css";
import Tasklist from "./Tasklist";
import Taskform from "./Taskform";

const dateformatted = new Date().toLocaleDateString("ko-KR", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
});

const TaskManager = ({
	todoList,
	onComplete,
	onUnComplete,
	onAppend,
	onDelete,
}) => {
	return (
		<div className="taskmanager">
			<div className="header">{dateformatted} - 할 일 목록 </div>
			<Tasklist
				onComplete={onComplete}
				onUnComplete={onUnComplete}
				onDelete={onDelete}
				todoList={todoList}
			></Tasklist>
			<Taskform onAppend={onAppend}></Taskform>
		</div>
	);
};

export default TaskManager;

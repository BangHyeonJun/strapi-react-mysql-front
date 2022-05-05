import React from "react";
import "./Task.css";

const Task = ({ id, title, className, onClick, onDelete }) => {
	return (
		<div className="tcontainer">
			<div className={className} onClick={onClick(id)}>
				{title}
			</div>
			<button className="delbtn" onClick={onDelete(id)}>
				삭제
			</button>
		</div>
	);
};

export default Task;

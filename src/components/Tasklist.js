import Task from "./Task";

const Tasklist = ({ onComplete, onUnComplete, onDelete, todoList }) => {
	if (!todoList.length)
		return (
			<div className="container">
				<span className="emptyemoji">🫢</span>
				<strong className="emptytxt">할 일을 입력해 주세요</strong>
			</div>
		);

	return (
		<div>
			<div className="ctheader">To Do</div>

			{todoList.map(
				(v) =>
					v.attributes.complete_yn || (
						<Task
							key={v.id}
							id={v.id}
							className={"task"}
							title={v.attributes.title}
							onClick={onComplete}
							onDelete={onDelete}
						></Task>
					)
			)}

			<div className="ctheader">Completed</div>

			{todoList.map(
				(v) =>
					v.attributes.complete_yn && (
						<Task
							key={v.id}
							id={v.id}
							className={"comtask"}
							title={v.attributes.title}
							onClick={onUnComplete}
							onDelete={onDelete}
						></Task>
					)
			)}
		</div>
	);
};

export default Tasklist;

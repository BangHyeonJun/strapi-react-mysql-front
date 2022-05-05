import React, { useState } from "react";
import "./Taskform.css";

const Taskform = ({ onAppend }) => {
	const [inputEntered, updateInput] = useState("");

	const enterTextlistener = (e) => {
		updateInput(() => e.target.value);
	};

	return (
		<form
			onSubmit={() => {
				onAppend({ title: inputEntered });
			}}
		>
			<div className="taskform">
				<input
					className="ipclass"
					type="text"
					pattern=".*"
					placeholder="할 일을 추가해주세요"
					value={inputEntered}
					onChange={enterTextlistener}
				/>
			</div>
		</form>
	);
};

export default Taskform;

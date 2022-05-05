import React, { useState } from "react";
import "./Taskform.css";

const Taskform = ({ onAppend }) => {
	const [inputEntered, updateInput] = useState("");

	const enterTextlistener = (e) => {
		if (e.key === "Enter") {
			onAppend(inputEntered);
			updateInput("");
		} else {
			updateInput(() => e.target.value);
		}
	};

	return (
		<div className="taskform">
			<input
				className="ipclass"
				type="text"
				pattern=".*"
				placeholder="할 일을 추가해주세요"
				value={inputEntered}
				onChange={enterTextlistener}
				onKeyPress={enterTextlistener}
			/>
		</div>
	);
};

export default Taskform;

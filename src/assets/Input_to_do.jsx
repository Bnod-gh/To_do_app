import React, { useState } from "react";

function Input_to_do({ getTask }) {
  const [inputTask, setInputTask] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handelChange = (e) => {
    setInputTask(e.target.value);
  };

  const handelClick = (e) => {
    e.preventDefault();
    if (inputTask.trim()) {
      getTask(inputTask);
      setInputTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        value={inputTask}
        onChange={handelChange}
        className="px-1 py-2 min-w-96 rounded-l-md outline-none active:shadow-lg focus:ring-2 focus:ring-slate-400 "
      />
      <button
        onClick={handelClick}
        className="px-2 py-2 bg-slate-700 text-white font-medium rounded-r-md outline-none pointer"
      >
        Add Task
      </button>
    </div>
  );
}

export default Input_to_do;

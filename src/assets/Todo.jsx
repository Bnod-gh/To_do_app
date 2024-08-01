import React, { useState } from "react";
import Input_to_do from "./Input_to_do";
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Todo() {
  const ToDoKey = "ourToDo";
  const [task, setTask] = useState(() => {
    const localsto = localStorage.getItem(ToDoKey);
    if (!localsto) return [];
    return JSON.parse(localsto);
  });

  const handleTask = (newTask) => {
    setTask([...task, newTask]);
    console.log(task);
  };

  //add data to local storage(setitem,getitem)
  localStorage.setItem(ToDoKey, JSON.stringify(task));

  const handleDeletetask = (value) => {
    const deletetask = task.filter((items) => items !== value);
    setTask([...deletetask]);
  };

  return (
    <div>
      <Input_to_do getTask={handleTask} />
      <ul className="mt-5 flex flex-col">
        {task.map((items, index) => (
          <li
            key={index}
            className="flex flex-row justify-between p-1 my-1 text-lg text-white"
          >
            {index + 1}. {items}
            <div className="flex font-medium text-2xl gap-2 ">
              {/* <MdDone onClick={()=>handleTickclick(index)} className="text-orange-400 cursor-pointer"/> */}
              <MdDelete
                onClick={() => handleDeletetask(items)}
                className="text-amber-300"
              />
            </div>
            
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

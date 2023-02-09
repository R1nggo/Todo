import { useRef, useState } from "react";

function TaskInput(props) {
  const ref = useRef();
  const { text, setText, tasks, setTasks } = props;
  return (
    <div>
      <input
        ref={ref}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (text) {
            setTasks([...tasks, { id: 1, text }]);
            setText("");
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;

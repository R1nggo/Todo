import { useRef, useState } from "react";
import "./App.css";
import TaskInput from "./Components/taskInput.jsx";
import Tasks from "./Components/tasks.jsx";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <TaskInput
        text={text}
        setText={setText}
        setTasks={setTasks}
        tasks={tasks}
      />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;

import Task from "./Task/task.jsx";

function Tasks(props) {
  return (
    <div>
      {props.tasks.map((t) => (
        <Task id={t.id} text={t.text} />
      ))}
      {props.tasks.forEach((t, i) => {
        // props.setTasks([...props.tasks, t.id, ]);
      })}
      <button
        onClick={() => {
          props.setTasks([]);
        }}
      >
        Delete All
      </button>
    </div>
  );
}

export default Tasks;

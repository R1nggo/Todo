function Task(props) {
  return (
    <div>
      <p>
        <span>{props.id})</span> {props.text}
        <button>Edit</button>
        <button onClick={() => {}}>Delete</button>
      </p>
    </div>
  );
}

export default Task;

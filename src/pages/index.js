import styles from "@/styles/Home.module.css";
import { useState } from "react";
import TaskComponent from "../components/task";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState(0);

  function onRemoveTask(index) {
    setTasks(
      tasks.slice(0, index).concat(tasks.slice(index + 1))
    );
  }

  tasks.sort((task1, task2) => {
    return task1.priority > task2.priority ? -1 : 1;
  })

  return (
    <div className={styles.page}>
      <div>
        <h1>TODO</h1>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
        <input
          type="number"
          value={taskPriority}
          min={0}
          max={2}
          step={1}
          onChange={(e) => setTaskPriority(parseInt(e.target.value))}
        ></input>
        <button
          onClick={() => setTasks([
            ...tasks,
            {name: taskName, priority: taskPriority}
          ])}
        >Create New Task</button>
      </div>
      <br></br>
      <div>
        {tasks.map((task, index) => {
          return <TaskComponent
            task={task}
            onRemove={onRemoveTask}
            index={index}
          >
          </TaskComponent>
        })}
      </div>
    </div>
  );
}

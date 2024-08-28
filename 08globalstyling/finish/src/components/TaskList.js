import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ info }) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <>
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>

        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              info={info}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <BoxCard result="success">
        <div className="box">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            doloremque?
          </p>
        </div>
      </BoxCard>

      <BoxCard result="warning">
        <div className="box">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            doloremque?
          </p>
        </div>
      </BoxCard>

      <BoxCard result="alert">
        <div className="box">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
            doloremque?
          </p>
        </div>
      </BoxCard>
    </>
  );
};

import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import './TaskList.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false },
  ]);
  const [show, setShow] = useState(true);
  const styles = {
    color: '#be3434',
    border: '1px solid #be3434',
    padding: '20px',
    borderRadius: '10px',
  };

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <section className="tasklist">
      <h1 style={styles}>Task List</h1>
      <ul>
        <button
          className="trigger"
          onClick={() => setShow(!show)}
        >
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
            />
          ))}
      </ul>

      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </BoxCard>
    </section>
  );
};

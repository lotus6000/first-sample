import { useState, useRef } from 'react';
import './Todolist.css';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

const Todolist = () => {
  const [todos, settodos] = useState([]);
  const [task, setTask] = useState('');
  const [updateState, setupdateState] = useState(false);
  const getIndex = useRef(0);
  const userId = useRef(0);
  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = userId.current++;
    const currentTodo = { id: id, task: task };
    settodos((prev) => [currentTodo, ...prev]);
    reset();
    console.log(todos);
  };

  const reset = () => {
    setTask('');
  };

  const deleteTodo = (id) => {
    let newTodo = todos.filter((item) => {
      return item.id != id;
    });
    settodos(newTodo);
  };

  const editTodo = (id) => {
    getIndex.current = id;
    setupdateState((prev) => !prev);
    let newTodo = todos.map((item) => {
      return { ...item, [e.target.id]: e.target.value };
    });
    settodos();

    console.log(id);
  };
  return (
    <section>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Grocery List</label>
        <input
          type='text'
          name=''
          id='Name'
          value={task}
          onChange={handleChange}
        />
        {updateState == false ? (
          <button className='addTask' type='submit'>
            Add 
          </button>
        ) : (
          <button className='updateTask'>Update Task</button>
        )}
      </form>

      <div className='tableSection'>
        {todos.map((item) => {
          return (
            <div className='task' key={item.id}>
              <span>{item.task}</span>
              <div className='actionBtn'>
                <button className='del' onClick={() => deleteTodo(item.id)}>
                <RiDeleteBin7Fill />?
                </button>
                <button className='edit' onClick={() => editTodo(item.id)}>
                <BiSolidEdit />?
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Todolist;
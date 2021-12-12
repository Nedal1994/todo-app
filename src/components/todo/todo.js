import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';


import { v4 as uuid } from 'uuid';
import './todo.scss'
// import { Button } from "@blueprintjs/core";
import { Card } from "@blueprintjs/core";



const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header>
        <h1>To Do List: Manager ({incomplete})</h1>
      </header>
      <br/>

      <form onSubmit={handleSubmit}>
        <h2>Add To Do Item</h2>
<Card>
<label>
          <span>To Do Item</span>
          <br/>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>
<br/><br/>
        <label>
          <span>Assigned To</span>
          <br/>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>
        <br/><br/>
        <label>
          <span>Difficulty</span>
          <br/>
          <input onChange={handleChange} class='range' defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>
        <br/><br/>
        <label>
          <button class='button' type="submit">Add Item</button>
        </label>
        <br/> <br/>
        </Card>
      </form>
      <br/>
      <section>

      
<Card>
      {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        </div>

      ))}
      </Card></section>
    </>
  );
};

export default ToDo;

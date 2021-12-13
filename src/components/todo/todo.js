import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';

import Form from '../../components/todo/form'
import List from '../../components/todo/list'

import { v4 as uuid } from 'uuid';
import './todo.scss'
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
      <br />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List
        list={list}
        toggleComplete={toggleComplete}
      />

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

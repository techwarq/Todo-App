"use client";

import { useState, useEffect } from 'react';
import { Button, TextInput, Dropdown } from 'flowbite-react';
import { CalendarCheck } from 'lucide-react';
import TodoList from './TodoList';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [myData, setMyData] = useState([]);
  const [filter, setFilter] = useState('all'); // Define filter state

  useEffect(() => {
    axios.get('//dummyjson.com/todos?limit=5&skip=10')
      .then(res => {
        console.log(res.data);
        setMyData(res.data.todos);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    axios.post('https://dummyjson.com/todos/add', {
      id: uuidv4(),
      todo: newTodo,
      completed: false,
      userId: 5
    })
      .then(response => {
        console.log(response.data);
        setMyData(prevData => [response.data, ...prevData]);
        setNewTodo('');
      })
      .catch(error => {
        console.error('There was an error adding the todo!', error);
      });
  };

  const toggleFilter = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="bg-white/20 place-self-center text-purple-500 w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <CalendarCheck className='text-white' />
        <h1 className="text-3xl text-purple-500 font-semibold">To-do List</h1>
      </div>

      <div className="flex items-center my-7">
        <div className="relative w-full">
          <TextInput
            type="text"
            placeholder="Add your task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            colors='gray'
          />
        </div>
        <Button gradientDuoTone="purpleToPink" className='my-7 ml-1' onClick={addTodo}>ADD</Button>
      </div>

      <Dropdown label="Filter" inline dismissOnClick={false} className='mt-3'>
        <Dropdown.Item onClick={() => toggleFilter('all')}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => toggleFilter('completed')}>Completed</Dropdown.Item>
        <Dropdown.Item onClick={() => toggleFilter('incomplete')}>Incomplete</Dropdown.Item>
      </Dropdown>

      <TodoList myData={myData} setMyData={setMyData} filter={filter} />
    </div>
  );
};

export default Todo;

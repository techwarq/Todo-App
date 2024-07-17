import { useState, useEffect } from 'react';
import { Button, TextInput } from 'flowbite-react';
import { CalendarCheck } from 'lucide-react';
import TodoList from './TodoList';
import axios from 'axios';

const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
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


  return (
    <div className="bg-white/20 place-self-center text-purple-500 w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <CalendarCheck  className='text-white' />
        <h1 className="text-3xl text-purple-500 font-semibold">To-do List</h1>
      </div>

      <div className="flex items-center my-7 ">
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

      <TodoList myData={myData} setMyData={setMyData} /> 
    </div>
  );
};

export default Todo;

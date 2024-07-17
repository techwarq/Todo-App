import { List, Checkbox } from "flowbite-react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';
import Edit from './Edit';

const TodoList = ({ myData, setMyData }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  const handleDelete = (id) => {
    
    const todoToDelete = myData.find(todo => todo.id === id);
    
    if (todoToDelete && typeof todoToDelete.id === 'number') {
      
      axios.delete(`https://dummyjson.com/todos/${id}`)
        .then(() => {
          const updatedTodos = myData.filter(todo => todo.id !== id);
          setMyData(updatedTodos);
        })
        .catch(error => {
          console.error('Error deleting todo:', error);
          
          const updatedTodos = myData.filter(todo => todo.id !== id);
          setMyData(updatedTodos);
        });
    } else {
      
      const updatedTodos = myData.filter(todo => todo.id !== id);
      setMyData(updatedTodos);
    }
  };

  const handleEdit = (id) => {
    setEditTodoId(id);
    const todoToEdit = myData.find(todo => todo.id === id);
    setNewTodo(todoToEdit.todo);
  };

  const handleUpdate = () => {
    axios.put(`https://dummyjson.com/todos/${editTodoId}`, {
      todo: newTodo,
      completed: false,
      userId: 5
    })
      .then(response => {
        console.log('Todo updated:', response.data);
        const updatedTodos = myData.map(todo => 
          todo.id === editTodoId ? { ...todo, todo: newTodo } : todo
        );
        setMyData(updatedTodos);
        setEditTodoId(null);
        setNewTodo('');
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = myData.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setMyData(updatedTodos);

    // Update the completed status on the server
    const todoToUpdate = updatedTodos.find(todo => todo.id === id);
    axios.put(`https://dummyjson.com/todos/${id}`, {
      completed: todoToUpdate.completed
    })
      .then(response => {
        console.log('Todo completion status updated:', response.data);
      })
      .catch(error => {
        console.error('Error updating todo completion status:', error);
      });
  };

  return (
    <div className="flex items-center my-3 gap-2">
      <List unstyled>
        {myData.slice(0, 6).map(post => (
          <List.Item key={post.id} className="flex items-center justify-between">
            {editTodoId === post.id ? (
              <Edit newTodo={newTodo} setNewTodo={setNewTodo} addTodo={handleUpdate} />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id={`todo-${post.id}`}
                    checked={post.completed}
                    onChange={() => handleCheckboxChange(post.id)}
                  />
                  <span className={post.completed ? 'completed' : ''}>
                    {post.todo}
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                  <Pencil 
                    className="w-3.5 text-white cursor-pointer" 
                    onClick={() => handleEdit(post.id)} 
                  />
                  <Trash2 
                    className="w-3.5 text-white cursor-pointer" 
                    onClick={() => handleDelete(post.id)} 
                  />
                </div>
              </>
            )}
          </List.Item>
        ))}
      </List>
    </div>
  );
};

TodoList.propTypes = {
  myData: PropTypes.array.isRequired,
  setMyData: PropTypes.func.isRequired
};

export default TodoList;
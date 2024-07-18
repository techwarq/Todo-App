import { List, Checkbox } from "flowbite-react";
import axios from "axios";
import PropTypes from 'prop-types';
import { Trash2, Pencil } from 'lucide-react';
import { useState } from 'react';
import Edit from './Edit';

// TodoList component for rendering and managing a list of todos
const TodoList = ({ myData, setMyData, filter }) => {
  // State for managing the currently edited todo
  const [editTodoId, setEditTodoId] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  // Function to handle deleting a todo
  const handleDelete = (id) => {
    const todoToDelete = myData.find(todo => todo.id === id);
    
    // If the todo has a numeric ID, attempt to delete it from the server
    if (todoToDelete && typeof todoToDelete.id === 'number') {
      axios.delete(`https://dummyjson.com/todos/${id}`)
        .then(() => {
          // Remove the todo from the local state
          const updatedTodos = myData.filter(todo => todo.id !== id);
          setMyData(updatedTodos);
        })
        .catch(error => {
          console.error('Error deleting todo:', error);
          // If server deletion fails, still remove from local state
          const updatedTodos = myData.filter(todo => todo.id !== id);
          setMyData(updatedTodos);
        });
    } else {
      // If the todo doesn't have a numeric ID, just remove it from local state
      const updatedTodos = myData.filter(todo => todo.id !== id);
      setMyData(updatedTodos);
    }
  };

  // Function to initiate editing a todo
  const handleEdit = (id) => {
    setEditTodoId(id);
    const todoToEdit = myData.find(todo => todo.id === id);
    setNewTodo(todoToEdit.todo);
  };

  // Function to update an edited todo
  const handleUpdate = () => {
    axios.put(`https://dummyjson.com/todos/${editTodoId}`, {
      todo: newTodo,
      completed: false,
      userId: 5
    })
      .then(response => {
        console.log('Todo updated:', response.data);
        // Update the todo in the local state
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

  // Function to handle checkbox state changes
  const handleCheckboxChange = (id) => {
    // Update the completion status in local state
    const updatedTodos = myData.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setMyData(updatedTodos);

    // Update the completion status on the server
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

  // Filter todos based on the current filter setting
  const filteredData = myData.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true; // 'all' filter
  });

  return (
    <div className="flex items-center my-3 gap-2">
      <List unstyled>
        {/* Render only the first 6 todos after filtering */}
        {filteredData.slice(0, 6).map(post => (
          <List.Item key={post.id} className="flex items-center justify-between">
            {editTodoId === post.id ? (
              // Render Edit component for the todo being edited
              <Edit newTodo={newTodo} setNewTodo={setNewTodo} addTodo={handleUpdate} />
            ) : (
              // Render normal todo item
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

// PropTypes for type checking
TodoList.propTypes = {
  myData: PropTypes.array.isRequired,
  setMyData: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired 
};

export default TodoList;

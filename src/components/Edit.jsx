import { TextInput, Button } from "flowbite-react";
import PropTypes from 'prop-types';

// Edit component for editing an existing todo
const Edit = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="relative w-full">
          {/* Input field for editing the todo */}
          <TextInput
            type="text"
            placeholder="Edit your task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            colors='gray'
          />
        </div>
        {/* Button to submit the edited todo */}
        <Button 
          gradientDuoTone="purpleToPink" 
          className='my-7 ml-1' 
          onClick={addTodo}
        >
          UPDATE
        </Button>
      </div>
    </div>
  )
}

// PropTypes for type checking
Edit.propTypes = {
  newTodo: PropTypes.string.isRequired,    // The current value of the edited todo
  setNewTodo: PropTypes.func.isRequired,   // Function to update the edited todo value
  addTodo: PropTypes.func.isRequired       // Function to submit the edited todo
};

export default Edit;

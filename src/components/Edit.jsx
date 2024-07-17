import { TextInput, Button } from "flowbite-react";
import PropTypes from 'prop-types'; 

const Edit = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div>
      <div className="flex items-center ">
        <div className="relative w-full">
          <TextInput
            type="text"
            placeholder="Edit your task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            colors='gray'
          />
        </div>
        <Button gradientDuoTone="purpleToPink" className='my-7 ml-1' onClick={addTodo}>UPDATE</Button>
      </div>
    </div>
  )
}

Edit.propTypes = {
  newTodo: PropTypes.string.isRequired,
  setNewTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Edit;

ToDo App
A simple ToDo List application that integrates with the DummyJSON API for data handling and uses the Flowbite React library for UI components and styling.

Table of Contents
Features
Installation
Usage
Project Structure
Challenges Faced
Technologies Used
Live Demo
Contributing
License
Features
Add new tasks
Edit existing tasks
Delete tasks
Mark tasks as completed
Fetch and manage tasks using DummyJSON API
Responsive and modern UI with Flowbite React
Installation
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/techwarq/Todo-App.git
cd Todo-App
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app should now be running on http://localhost:3000.

Usage
Adding a Task:

Use the input field at the top of the page to add a new task.
Press Enter or click the "Add Task" button to add the task.
Editing a Task:

Click the edit icon next to the task you want to edit.
Modify the task description and save your changes.
Deleting a Task:

Click the delete icon next to the task you want to remove.
Marking a Task as Completed:

Click the checkbox next to the task to mark it as completed or uncompleted.
Project Structure
plaintext
Copy code
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── TaskList.jsx        # Component to display the list of tasks
│   │   ├── TaskItem.jsx        # Component to display individual task
│   │   └── ...
│   ├── pages
│   │   ├── index.jsx           # Main page component
│   │   └── ...
│   ├── services
│   │   └── api.js              # API service for interacting with DummyJSON
│   ├── App.jsx                 # Main App component
│   └── index.js                # Entry point of the application
└── ...
Key React Components
App.jsx: The main component that sets up the application and routes.
TaskList.jsx: Displays the list of tasks.
TaskItem.jsx: Represents a single task with options to edit, delete, and mark as complete.
Challenges Faced
API Integration:

Challenge: Handling asynchronous operations and managing the state for API requests.
Solution: Used useEffect to fetch data on component mount and useState to manage the tasks' state.
Responsive Design:

Challenge: Ensuring the application is responsive and looks good on all devices.
Solution: Utilized Flowbite React components and custom CSS for responsive design.
State Management:

Challenge: Managing state for multiple tasks and their updates.
Solution: Leveraged React's useState and useReducer hooks for efficient state management.
Technologies Used
React: Frontend library
Flowbite React: UI components and styling
DummyJSON API: API for handling data
Live Demo
Check out the live demo of the application here.


# Todo App

ToDo App
A simple ToDo List application that integrates with the DummyJSON API for data handling and uses the Flowbite React library for UI components and styling.



## Features



- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Fetch and manage tasks using DummyJSON API
- Responsive and modern UI with Flowbite React

## Installation


### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
#### 1. Clone the repository


```bash
git clone https://github.com/techwarq/Todo-App.git
cd Todo-App
```

#### 2. Install dependencies

```bash
npm install
```
#### 3. Start the development server

```bash
npm start
```
The app should now be running on http://localhost.

## Usage

#### 1. Adding a Task:

- Use the input field at the top of the page to add a new task.
- Press Enter or click the "Add" button to add the task.
#### 2. Editing a Task:

- Click the edit icon next to the task you want to edit.
- Modify the task description and click on "Update" button to save your changes.
#### 3. Deleting a Task:

- Click the delete icon next to the task you want to remove.
#### 4. Marking a Task as Completed:

- Click the checkbox next to the task to stike it as completed.

#### 5. Filter:

- Click on the 'Filter' dropdown to filter from 'All', 'Completed', 'InComplete'

## Roadmap

- Additional browser support

- Add more integrations

## Project Structure

```plaintext
├── public
│   ├── favicon.png
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Edit.jsx
│   │   ├── Todo.jsx
│   │   ├── TodoList.css
│   │   ├── TodoList.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── ...
```

*Key React Components*
- App.jsx: The main component that sets up the application and routes.
- Todo.jsx: Contains the main structure of the ToDo application including task input, filtering, and TodoList component.
- TodoList.jsx: Displays the list of tasks with options to edit, delete, and mark as complete using the Edit component.
- Edit.jsx: Handles the task editing functionality with input fields and update button.


## Challenges Faced

#### 1. Learning Flowbite React:

- *Challenge:* As a new user to Flowbite React, understanding its components and usage.
- *Solution:* Spent time reading the documentation and experimenting with different components to understand their functionalities and how to integrate them effectively.
#### 2.Manual ID Assignment:

- *Challenge:* Manually adding IDs to newly added todos to ensure each task has a unique identifier.
- *Solution:* Used the uuidv4 library to generate unique IDs for each new todo item, ensuring they are distinct and avoiding conflicts.

## Technologies Used
- *React:* Frontend library
- *Flowbite React:* UI components and styling
- *DummyJSON API:* API for handling data

## Demo

Check out the live demo of the application [here](https://todo-app-eight-sepia.vercel.app/).



import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newTaskInput, setNewTask] =  useState('');
  const [newCategory, setNewCategory] = useState('Code');
  const [displayedTasks, setDisplayedTasks] = useState(TASKS);

  const newTask = {
    text: newTaskInput,
    category: newCategory,
  }

  function handleDelete(text) {
    setDisplayedTasks(displayedTasks.filter(task => {
      return task.text !== text;
    }))
  }

  function handleFilter(category) {
    setSelectedCategory(category);
  }

  function handleNewTaskInput(e) {
    setNewTask(e.target.value);
  }
  
  function handleNewCategory(e) {
    setNewCategory(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    
    setDisplayedTasks([...displayedTasks, newTask]);
    setNewTask('');
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      CATEGORIES = { CATEGORIES } 
      handleFilter = { handleFilter }
      selectedCategory = {selectedCategory}
      />
      <NewTaskForm 
      CATEGORIES = { CATEGORIES } 
      handleNewTaskInput = { handleNewTaskInput } 
      handleNewCategory = { handleNewCategory }
      newTaskInput = {newTaskInput}
      handleFormSubmit = { handleFormSubmit }
      />
      <TaskList TASKS = { TASKS } 
      selectedCategory = { selectedCategory } 
      handleDelete = { handleDelete }
      displayedTasks = { displayedTasks }
      />
    </div>
  );
}

export default App;

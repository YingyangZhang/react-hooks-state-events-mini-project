import React from "react";
import Task from "./Task";


function TaskList({ selectedCategory, displayedTasks, handleDelete }) {

  const filteredTasks = displayedTasks.filter(task => {
    if(selectedCategory === 'All'){
      return true;
    } else {
      return selectedCategory === task.category;
    }
  })

  return (
    <div className="tasks">
      {filteredTasks.map(task => {
        return <Task 
        text = { task.text } 
        category = { task.category } 
        key = { task.text }
        handleDelete = { handleDelete }
        />
      })}
    </div>
  );
}

export default TaskList;

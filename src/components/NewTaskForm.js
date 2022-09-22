import React from "react";

function NewTaskForm({ CATEGORIES, newTaskInput, handleNewCategory, handleNewTaskInput, handleFormSubmit }) {
  return (
    <form className="new-task-form" onSubmit = { handleFormSubmit }>
      <label>
        Details
        <input type="text" name="text" onChange = { handleNewTaskInput } value = { newTaskInput }/>
      </label> 
      <label>
        Category
        <select name="category" onChange = { handleNewCategory }>
          {CATEGORIES.filter(category => category !== 'All').map((category, index) => {
            return <option key = { index }>{ category }</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

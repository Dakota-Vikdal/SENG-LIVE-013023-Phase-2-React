import React, {useState} from "react";

function ProjectForm({projects}) {
  
  const [formState, setFormState] =useState({
    name:"",
    about:"",
    phase:"",
    link:"",
    image:"",
  })

  const {name, about, phase, link, image} = formState

  function handleFormChange(e) {
    const {name, value} = e.target
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(e.target.value)
  }
  
  

  

  return (
    <section>
      <form className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={name} onChange={handleFormChange}/>

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={about} onChange={handleFormChange}/>

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={phase} onChange={handleFormChange}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={link} onChange={handleFormChange}/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={image} onChange={handleFormChange}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;

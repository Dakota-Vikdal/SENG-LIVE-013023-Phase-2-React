import React, {useState} from "react";


const initialState ={
  "name": "",
  "about": "",
  "Phase": "",
  "link": "",
  "image": ""  
}


function ProjectForm({onAddProject}) {
  
  const [formState, setFormState] =useState({initialState})

  const {name, about, phase, link, image} = formState

  function handleFormChange(e) {
    const {name, value} = e.target
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // const newProject = {
    //   name: name,
    //   about: about,
    //   phase: phase,
    //   link: link,
    //   image: image
    // }
    onAddProject(formState)
    setFormState(initialState)
  }
  
  

  

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
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

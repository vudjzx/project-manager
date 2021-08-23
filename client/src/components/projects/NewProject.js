import React, { useState } from "react";

const NewProject = () => {
  const [project, setProject] = useState({
    name: "",
  });
  const onChangeProject = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const { name } = project;
  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>

      <form className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Project name"
          name="name"
          value={name}
          onChange={onChangeProject}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Add project"
        />
      </form>
    </>
  );
};

export default NewProject;

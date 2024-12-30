import React, { useState } from "react";

function Form({ addStudent }) {
  const [name, setName] = useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault(); 

    
    const newStudent = { name };

    
    fetch("https://json-server-template-t803.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        addStudent(data); 
        setName(""); 
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>ENTER NAME HERE:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default Form;

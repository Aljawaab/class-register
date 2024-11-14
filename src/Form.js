import React, { useState } from "react";

function Form({ addStudent }) {
  const [name, setName] = useState(""); // State for the student name

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new student object with only the name
    const newStudent = { name };

    // Make a POST request to add the new student
    fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        addStudent(data); // Update the parent component's state with the new student
        setName(""); // Clear the form field
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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

import React, { useState, useEffect } from "react";
import Table from "./Table"
import Form from "./Form";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);


  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  return (
    <div className="App">
      <h1>ATTENDANCE TRACKER</h1>
      <Form addStudent={addStudent}/>
      <Table students={students}/>      
    </div>
  );
}

export default App;

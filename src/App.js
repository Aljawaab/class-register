import React, { useState, useEffect } from "react";
import Table from "./Table"
import Form from "./Form";
import "./App.css"
import Search from "./Search";

function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    fetch("https://json-server-template-t803.onrender.com")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data)
        setFilteredStudents(data)
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);


  const addStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setFilteredStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredStudents(students); 
    } else {
      const filtered = students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  };

  return (
    <div className="App">
      <h1>ATTENDANCE TRACKER</h1>
      <Form addStudent={addStudent} />
      <Search onSearch={handleSearch} />
      <Table students={filteredStudents} />      
    </div>
  );
}

export default App;





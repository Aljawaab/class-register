import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead.js"

function Table({students}){

  /*const [students, setStudents] = useState([]) 

  useEffect(() => { 
      
    fetch("http://localhost:3000/students")  
      .then(response => response.json())   
      .then(students => setStudents(students));    
       
    }, []);*/

    
    return(
        <table>
          <TableHead />
          <TableBody students={students} />
        </table>
    )
}

export default Table 





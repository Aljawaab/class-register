import React from "react";
import TableRow from "./TableRow.js"

function TableBody({students}){
    return(
          <tbody>
            {students.map(student => <TableRow key={student.id} student={student} />)}
          </tbody>        
    )
}

export default TableBody
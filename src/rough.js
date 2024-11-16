import React from "react";  

// Sample data  
const students = [  
  { id: 1, name: "James Smith" },  
  { id: 2, name: "Olivia Johnson" },  
  { id: 3, name: "Liam Brown" },  
  { id: 4, name: "Emma Williams" },  
  { id: 5, name: "Noah Jones" },  
  { id: 6, name: "Sophia Garcia" },  
  { id: 7, name: "Lucas Miller" },  
  { id: 8, name: "Mia Davis" },  
  { id: 9, name: "Ethan Martinez" },  
  { id: 10, name: "Ava Rodriguez" },  
];  

function TableHead() {  
  return (  
    <thead>  
      <tr>  
        <th>Student Name</th>  
        <th>Monday</th>  
        <th>Tuesday</th>  
        <th>Wednesday</th>  
        <th>Thursday</th>  
        <th>Friday</th>  
      </tr>  
    </thead>  
  );  
}  

function TableRow({ student }) {  
  return (  
    <tr>  
      <td>{student.name}</td>  
      <td><button>A</button><button>P</button></td>  
      <td><button>A</button><button>P</button></td>  
      <td><button>A</button><button>P</button></td>  
      <td><button>A</button><button>P</button></td>  
      <td><button>A</button><button>P</button></td>  
    </tr>  
  );  
}  

function StudentTable() {  
  return (  
    <table>  
      <TableHead />  
      <tbody>  
        {students.map(student => (  
          <TableRow key={student.id} student={student} />  
        ))}  
      </tbody>  
    </table>  
  );  
}  

export default StudentTable;




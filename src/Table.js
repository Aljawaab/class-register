import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead.js"

function Table({students}){    
    return(
        <table>
          <TableHead />
          <TableBody students={students} />
        </table>
    )
}

export default Table 





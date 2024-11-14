import React from "react";
import Buttons from "./Buttons";

function TableRow({student}){
    return(
        <tr>
            <td>{student.name}</td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
        </tr>

    )
}

export default TableRow
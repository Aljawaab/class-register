import React from "react";
import Buttons from "./Buttons";

function TableRow({students}){
    return(
        <tr>
            <td>{students.name}</td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
            <td><Buttons /></td>
        </tr>

    )
}

export default TableRow
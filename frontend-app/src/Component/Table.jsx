import React from "react";
import EmployeeCrud from "./EmployeeCrud";

 function Card(student){
  return (
    <tbody>
      <tr>
        <th scope="row">{student.id} </th>
        <td>{student.name}</td>
        <td>{student.address}</td>
        <td>{student.phone}</td>
        <td>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => EmployeeCrud.editStudent(student)}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => EmployeeCrud.DeleteStudent(student._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
 }

 export default Card;
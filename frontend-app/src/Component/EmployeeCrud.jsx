import axios from "axios";
import { useEffect, useState } from "react";



import Card from "./Table";
// function createTable(student){
//   return(
//    <Card
//    key={student._id}
//    id={student._id}
//    name={student.name}
//    address={student.address}
//    phone={student.phone}
//    />
//   );
// }

function EmployeeCrud() {
  const [_id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setMobile] = useState("");
  const [students, setUsers] = useState([]);

  useEffect(() => {
    (async () => await getAllStudents())();
  }, []);

  /// Get All Students method ////
  const getAllStudents = async () => {
    await axios.get('http://localhost:8000/user/getAll')
    .then(response => {
      //console.log(response.data);
      setUsers(response.data);
    }).catch(err => {
      console.log(err);
    });
  };

    /// Save Students method ////

  async function save(event) {
    event.preventDefault();
      
      let data = {
        name: name,
        address: address,
        phone: phone,
      };
  
      await axios.post('http://localhost:8000/user/create', data)
      .then(response => {
        console.log(response);
      //alert("Employee Registation Successfully");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      getAllStudents();
      }).catch(err => {
        console.log(err);
        alert("User Registation Failed");
      });
    };

  /// Edit Students method ////

  async function editStudent(employees) {
    setName(employees.name);
    setAddress(employees.address);
    setMobile(employees.phone);

    setId(employees._id);
  }

    /// Delelte Students method ////

  async function DeleteStudent(_id) {
    
    await axios.delete(`http://localhost:8000/user/delete/${_id}`)
    .then(response => {
      console.log(response);
      //alert("Employee deleted Successfully");
      getAllStudents();
    }).catch(err => {
      console.log(err);
      alert("Employee deleted Failed");

    });
  }

    /// Update Students method ////

  async function update(event) {   
  event.preventDefault();

    let data = {
      _id: _id,
      name: name,
      address: address,
      phone: phone,
    };

   await axios.patch(`http://localhost:8000/user/update/${_id}`, data)
    .then(response => {
      console.log(response);
      //alert("Registation Updateddddd");
      setId("");
      setName("");
      setAddress("");
      setMobile("");
      getAllStudents();
    }).catch(err => {
      console.log(err);
      alert("Registation Update Failed");

    });
 
 

}

  /// Show Students method ////

function showTable(student){
  return (
    <tbody>
      <tr>
        <th scope="row">{student._id} </th>
        <td>{student.name}</td>
        <td>{student.address}</td>
        <td>{student.phone}</td>
        <td>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => editStudent(student)}
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => DeleteStudent(student._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
 }

  return (
    <div>
      <h1>Employee Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="_id"
              hidden
              value={_id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Employee Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Employee Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Mobile</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              value={phone}
              onChange={(event) => {
                setMobile(event.target.value);
              }}
            />
          </div>

          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Address</th>
            <th scope="col">Student Mobile</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(showTable)  }
      </table>
    </div>
  );
}

export default EmployeeCrud;

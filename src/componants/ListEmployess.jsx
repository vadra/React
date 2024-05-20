import React, { useEffect, useState } from "react";
import { listEmployees, updateEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { deleteEmployee } from "../services/EmployeeService";

const ListEmployess = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployess();
  }, []);

  function getAllEmployess() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function deleteEmp(id) {
    deleteEmployee(id)
      .then((response) => {
        getAllEmployess();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">List Of Employess</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <div className="d-grid gap-2 d-md-flex">
                  <button
                    className="btn btn-warning"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger "
                    onClick={() => deleteEmp(employee.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployess;

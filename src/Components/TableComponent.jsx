import React from "react";
import Table from "react-bootstrap/Table";
function TableComponent() {
  const employees = [
    { id: 1, name: "Michael", position: "Manager", salary: 60000 },
    { id: 2, name: "Pam", position: "Receptionist", salary: 35000 },
    { id: 3, name: "Jim", position: "Salesman", salary: 40000 },
  ];

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;

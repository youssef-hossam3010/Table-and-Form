import React from "react";

function Table(props) {
  const {users}=props;
    return (
      <div className="my-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
            
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  
import Form from './components/form';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from "react";


import './App.css';
import Table from './components/table';

function App() {
    const [users, setUsers] = useState([{name:"youssef",
    age:"25"}]);
  
    const handleAddUser = (data) => {
      setUsers([...users, data]);
    };
  return (
    <div className="App">
     <Form onAddUser={handleAddUser}></Form>
     <Table users={users}></Table>
    </div>
  );
}

export default App;

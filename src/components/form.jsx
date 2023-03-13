import React, { useState } from "react";
function Form(props) {
  const { onAddUser }=props;
  let [name, SetName] = useState("");
  let [age, SetAge] = useState("");
  function nameHandler(e) {
    SetName(e.target.value);
  }
  function AgeHandler(e) {
    SetAge(e.target.value);
  }
  function add(e) {
    e.preventDefault();
    onAddUser({ name, age });
  }

  return (
    <>
      <form>
        <input type="text" value={name} onChange={nameHandler} placeholder="Name"></input>
        <input type="text" value={age} onChange={AgeHandler} placeholder="age" ></input>
        <input type="button" onClick={add} value="addUser"></input>
      </form>
    </>
  );
}

export default Form;



import React, { useState } from "react";
import axios from "axios"; // Import Axios

function App() {
  const [formData, setFormData] = useState({});
  let onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let submitHandler = (e) => {
    e.preventDefault();
    // making an api call with the current form data
    axios
      .post("http://localhost:7501/user", formData)
      .then((res) => {
        console.log(res);
        alert("posted data successfully");
      })
      .catch((e) => {
        console.log(e);
        alert("error posting the record");
      });
  };

  return (
    <>
      <h1>Admin dashboard portal</h1>
      <form method="post">
        <input
          type="text"
          placeholder="Enter FName here"
          name="firstName"
          onChange={(e) => onChangeHandler(e)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter LName here"
          name="lastName"
          onChange={(e) => onChangeHandler(e)}
        />{" "}
        <br />
        <input
          type="email"
          placeholder="Enter Email here"
          name="email"
          onChange={(e) => onChangeHandler(e)}
        />{" "}
        <br />
        <button onClick={(e) => submitHandler(e)}>Add details</button>
      </form>
    </>
  );
}

export default App;

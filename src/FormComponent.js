import React, { useState } from "react";

const FormComponent = () => {
  // State for name and email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Log the values (or perform your desired action)
    console.log("Name:", name);
    console.log("Email:", email);

    // Optionally, you can send the data to an API or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

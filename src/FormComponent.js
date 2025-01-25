import React, { useState } from "react";

const FormComponent = () => {
  // Single state to store all form values as an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the state using the spread operator to preserve other fields
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Log the form data object
    console.log("Form Data:", formData);

    // Optionally, you can send the data to an API or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter your age"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

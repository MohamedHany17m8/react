import React, { useState } from "react";

const FormComponent = () => {
  // Single state to store all form values as an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    bio: "", // New field for textarea
    subscribe: false, // New field for checkbox
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Update the state using the spread operator to preserve other fields
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
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
      <div>
        <label htmlFor="bio">Bio: </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Tell us about yourself"
          rows={4}
        />
      </div>
      <div>
        <label htmlFor="subscribe">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleInputChange}
          />
          Subscribe to newsletter
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

import React, { useState } from "react";

const FormComponent = () => {
  // Single state to store all form values as an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    bio: "",
    subscribe: false,
    country: "", // New field for select dropdown
    role: "", // New field for radio buttons
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Update the state using the spread operator to preserve other fields
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox and other inputs
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
      <div>
        <label htmlFor="country">Country: </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <div>
        <label>Role: </label>
        <label htmlFor="student">
          <input
            type="radio"
            id="student"
            name="role"
            value="student"
            checked={formData.role === "student"}
            onChange={handleInputChange}
          />
          Student
        </label>
        <label htmlFor="teacher">
          <input
            type="radio"
            id="teacher"
            name="role"
            value="teacher"
            checked={formData.role === "teacher"}
            onChange={handleInputChange}
          />
          Teacher
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

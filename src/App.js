import React, { useState } from "react";
import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import CheckboxInput from "./CheckboxInput";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isEmployee, setIsEmployee] = useState(false);
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAgeError, setShowAgeError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate age
    if (age < 18 || age > 100 || isNaN(age)) {
      setShowAgeError(true);
      return;
    }

    // Validate phone number
    if (!/^\d{10,12}$/.test(phoneNumber)) {
      setShowPhoneError(true);
      return;
    }

    // If all validations pass, show success modal
    setShowSuccessModal(true);
  };

  const closeModal = () => {
    setShowSuccessModal(false);
    setShowAgeError(false);
    setShowPhoneError(false);
  };

  const isFormValid = () => {
    return (
      name.trim() &&
      profession.trim() &&
      phoneNumber.trim() &&
      address.trim() &&
      age.trim() &&
      (isEmployee ? salary.trim() : true)
    );
  };

  return (
    <div className="app" onClick={closeModal}>
      <form onSubmit={handleSubmit} className="loan-form">
        <h1>Requesting a Loan</h1>

        {/* Name Input */}
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Profession Input */}
        <TextInput
          label="Profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />

        {/* Phone Number Input */}
        <NumberInput
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        {/* Address Input */}
        <TextInput
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* Age Input */}
        <NumberInput
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        {/* Employee Checkbox */}
        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={isEmployee}
            onChange={(e) => setIsEmployee(e.target.checked)}
          />
          <label>Are you an employee?</label>
        </div>

        {/* Salary Input (Conditional) */}
        {isEmployee && (
          <TextInput
            label="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
          />
        )}

        {/* Submit Button */}
        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal ok">
          <p>The Form Has Been Submitted Successfully</p>
        </div>
      )}

      {/* Age Error Modal */}
      {showAgeError && (
        <div className="modal">
          <p>Age is not allowed</p>
        </div>
      )}

      {/* Phone Error Modal */}
      {showPhoneError && (
        <div className="modal">
          <p>Phone number is invalid</p>
        </div>
      )}
    </div>
  );
}

export default App;

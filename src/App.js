import React from "react";
import { useState } from "react";

function PhoneList() {
  const [phones, setPhones] = useState([
    { id: 1, type: "iPhone" },
    { id: 2, type: "Samsung" },
    { id: 3, type: "Google Pixel" },
    { id: 4, type: "OnePlus" },
  ]);
  const [newPhone, setNewPhone] = useState("");
  const [nextId, setNextId] = useState(5);

  const addPhone = () => {
    if (newPhone.trim()) {
      setPhones((prev) => [...prev, { id: nextId, type: newPhone }]);
      setNextId((prev) => prev + 1);
      setNewPhone("");
    }
  };

  const deletePhone = (id) => {
    setPhones((prevPhones) => {
      const index = prevPhones.findIndex((phone) => phone.id === id);
      if (index !== -1) {
        const newPhones = [...prevPhones];
        newPhones.splice(index, 1);
        return newPhones;
      }
      return prevPhones;
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addPhone();
    }
  };
  return (
    <div>
      <h1>Phone Types</h1>
      <div>
        <input
          type="text"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
          placeholder="Enter phone type"
          onKeyDown={handleKeyDown} // Add this line
        />
        <button onClick={addPhone}>Add</button>
      </div>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            {phone.type}
            <button onClick={() => deletePhone(phone.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;

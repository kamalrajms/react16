import React, { useState } from "react";

export default function multipleInputForms() {
  const [formData, SetformData] = useState({
    name: "kishore",
    email: "",
    age: "",
  });

  const handleChande = (e) => {
    const { name, value } = e.target;
    SetformData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h2>Multiple input fields example</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="enter name"
        onChange={handleChande}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter email"
        onChange={handleChande}
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        placeholder="enter age"
        onChange={handleChande}
      />
    </div>
  );
}

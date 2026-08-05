import { useState } from "react";

export default function MultiInputForm() {
  // Initailize state with an object represnting all fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Dynamic handler for all input
  const handleChange = (event) => {
    const { name, value } = event.target;

    // use the spread operator to preserve unchanged fields
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamic update the specific key
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username" //Matches state key
        value={formData.username}
        onChange={handleChange}
        placeholder="username"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
      />

      <button type="submit">Register</button>
    </form>
  );
}

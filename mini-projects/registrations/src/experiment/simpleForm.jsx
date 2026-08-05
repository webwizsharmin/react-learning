import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Name:", name);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <label htmlFor="name" className="font-medium">
        Name:
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

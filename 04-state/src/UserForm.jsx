import { useState } from "react";

export default function UserForm() {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleBtnClick = () => {
    alert(`you typed: ${text}`);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={text} />

      <button onClick={handleBtnClick}>Submit</button>
    </div>
  );
}

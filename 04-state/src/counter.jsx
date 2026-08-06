import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    return setCount(count + 1);
  }

  return (
    <div>
      <p>you have click {count} times </p>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div>
      <p>Current count: {count}</p>
      <div className="flex gap-4">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>

      <div>
        <button onClick={handleMoreClick} className="px-4 py-2 border rounded">
          {showMore ? "View Email" : "example@mail.com"}
        </button>
      </div>
    </div>
  );
}

export default App;

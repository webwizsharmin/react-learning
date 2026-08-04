import { useState } from "react";
import ListManager from "./components/ListManager";
import { tasks } from "./components/taskData";

function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  function handlePrevClick() {
    setIndex(index - 1);
  }

  let task = tasks[index];

  return (
    <div className="bg-gray-700  p-6">
      <h2 className="text-5xl font-extrabold text-green-600 mb-4">
        List of Tasks
      </h2>
      <div className="flex gap-4 mb-2">
        <button
          onClick={handlePrevClick}
          className="px-4 py-2 border rounded-lg bg-gray-300 hover:bg-gray-400"
        >
          prev
        </button>
        <button
          onClick={handleClick}
          className="px-4 py-2 border rounded-lg bg-gray-300 hover:bg-gray-400"
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
        <ListManager
          key={index}
          title={task.title}
          description={task.description}
          action={task.action}
        />
      </div>
    </div>
  );
}

export default App;

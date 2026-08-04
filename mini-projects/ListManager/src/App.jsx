import ListManager from "./components/ListManager";

function App() {
  const tasks = [
    {
      title: "learn useState",
      description: "useState is a hook of react",
      action: "Edit",
    },
    {
      title: "Build a counter",
      description: "using useState a counter app need to build ",
      action: "save",
    },
    {
      title: "learn useState",
      description: "useState is a hook of react",
      action: "Edit",
    },
    {
      title: "learn useState",
      description: "useState is a hook of react",
      action: "Edit",
    },
  ];

  return (
    <div className="bg-gray-700  p-6">
      <h2 className="text-5xl font-extrabold text-green-600 mb-4">
        List of Tasks
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {tasks.map((task, index) => (
          <ListManager
            key={index}
            title={task.title}
            description={task.description}
            action={task.action}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

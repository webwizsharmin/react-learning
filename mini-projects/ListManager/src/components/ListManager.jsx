export default function ListManager({ title, description, action }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600">
        {action}
      </button>
    </div>
  );
}

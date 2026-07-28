export function ProfileCard() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center w-64">
      <img
        src="./john.jpg"
        alt="Zara's avatar"
        className="w-24 h-24 ring-2 ring-gray-500 rounded-full"
        loading="lazy"
      />
      <h2 className="text-lg font-bold mt-2">John Doe</h2>
      <p className="text-gray-600 text-sm">Frontend Developer</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Connect
      </button>
    </div>
  );
}

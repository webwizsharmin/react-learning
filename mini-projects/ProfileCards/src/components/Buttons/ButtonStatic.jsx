function Button() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 gap-6">
      <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 ring-blue-500 focus:ring-offset-2">
        Primary
      </button>

      <button className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 focus:ring-2 ring-green-500 focus:ring-offset-2">
        Success
      </button>

      <button className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 focus:ring-2 ring-red-500 focus:ring-offset-2">
        Danger
      </button>
    </div>
  );
}

export default Button;

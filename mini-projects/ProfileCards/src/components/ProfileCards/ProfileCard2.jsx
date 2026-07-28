export default function ProfileCard({ image, name, role, actionLabel }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-64">
      <img
        src={image}
        alt={`${name}'s avatar`}
        className="w-24 h-24 rounded-full"
        loading="lazy"
      />

      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600 text-sm">{role}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {actionLabel}
      </button>
    </div>
  );
}

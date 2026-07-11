export function ProfileCard({ image, name, description }) {
  return (
    <>
      <img className="rounded-full " src={image} alt="{name}'s picture" />

      <h1 className="text-blue-600 ">Hello {name}</h1>
      <p className="text-gray-800 font-semibold">{description}</p>

      <button
        className="m-2 px-4 py-2 bg-blue-400 text-white rounded-xl"
        onClick={() => alert("Clicked!")}
      >
        click
      </button>
    </>
  );
}

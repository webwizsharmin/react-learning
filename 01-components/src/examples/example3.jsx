export function ProductCard({ image, title, description, price }) {
  return (
    <div className=" p-4 bg-white rounded-lg shadow-md flex justify-between items-center ">
      <div>
        <img
          className="h-24 w-24 rounded object-cover "
          src={image}
          alt={title}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Buy Now
        </button>
      </div>

      <div>
        <p className="text-green-600 font-bold"> {price}$ </p>
      </div>
    </div>
  );
}

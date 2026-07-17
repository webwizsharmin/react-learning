export function ProductCard({
  image,
  title,
  description,
  price,
  currency = "USD",
  onBuy,
}) {
  return (
    <article className=" mr-auto mb-4 p-4 bg-white rounded-lg shadow-md flex flex-col gap-4 w-64">
      {/* Product Image */}
      <img
        src={image}
        alt={`${title} image`}
        className="h-40 w-full rounded object-cover"
      />

      {/* Product Info */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Price + Action */}
      <div className="flex justify-between items-center">
        <p className="text-green-600 font-bold">
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency,
          }).format(price)}
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={onBuy}
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}

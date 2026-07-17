import { ProductCard } from "./myexperiment/productCard1";

const products = [
  {
    title: "Coffee Bean",
    image: "/p2.jpg",
    description: "Extra fresh coffee bean from Belgium",
    price: 50,
  },
  {
    title: "Dark Roast",
    image: "/p2.jpg",
    description: "Strong dark roast beans",
    price: 60,
  },
  {
    title: "Coffee Bean",
    image: "/p2.jpg",
    description: "Extra fresh coffee bean from Belgium",
    price: 50,
  },
  {
    title: "Coffee Bean",
    image: "/p2.jpg",
    description: "Extra fresh coffee bean from Belgium",
    price: 50,
  },
];
export default function App() {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          onBuy={() => alert(`${product.title} added to cart`)}
        />
      ))}
    </div>
  );
}

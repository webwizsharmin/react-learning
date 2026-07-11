import Card from "./myexperiment/experiment1";
import { ProfileCard } from "./examples/examples2";
import { ProductCard } from "./examples/example3";
export default function App() {
  return (
    <section>
      <Card />
      <ProfileCard
        name="Katherine Johnson"
        image="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        description="This is my first react component"
      />
      <ProductCard
        title="Coffee Beans"
        image="./p2.jpg"
        description=" extra fresh coffee from brazil."
        price="50"
      />
    </section>
  );
}

import { Profile } from "../examples/example1";

export default function Card() {
  return (
    <section>
      <div>
        <Profile />
        <h1 className=" text-slate-800 font-bold ">Katherin Johnson</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor sed
          necessitatibus quod repellendus doloribus consectetur architecto nisi
          maxime totam.
        </p>

        <button className="m-2 border-2 rounded-2xl p-1 bg-amber-600 text-violet-700">
          I'm a button
        </button>
      </div>
    </section>
  );
}

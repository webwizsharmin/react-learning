import Button from "./Button";

export default function ListManager({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2">
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Remove</Button>
      </div>
    </div>
  );
}

export function ButtonStatic() {
  const baseStyles = "rounded px-4 py-2 font-medium text-white";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };
  return (
    <div className="flex flex-col gap-6">
      <button className={baseStyles + " " + variants.primary}>Save</button>
      <button className={baseStyles + " " + variants.success}>Done</button>
      <button className={baseStyles + " " + variants.danger}>Delete</button>
    </div>
  );
}

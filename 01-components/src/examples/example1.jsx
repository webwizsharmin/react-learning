export function Profile() {
  return (
    <img
      src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
      alt="Katherin Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </>
  );
}

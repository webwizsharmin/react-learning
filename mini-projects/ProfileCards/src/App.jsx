import { ButtonStatic } from "./components/Buttons/ButtonStatic";
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 gap-6">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <ButtonStatic />
      {/* <ProfileCard
        image="./john.jpg"
        name="John Doe"
        role="Frontend Developer"
        actionLabel="Connect"
      />
      <ProfileCard
        image="./jane.jpg"
        name="Jane Smith"
        role="UI/UX Designer"
        actionLabel="Message"
      />
      <ProfileCard
        image="./alice.jpg"
        name="Alice Kane"
        role="Photographer"
        actionLabel="Connect"
      /> */}
    </div>
  );
}

export default App;

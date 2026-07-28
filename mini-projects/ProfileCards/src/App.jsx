import ProfileCard from "./components/ProfileCards/ProfileCard2";
// import { zara } from "./zara.jpg";
function App() {
  return (
    <div className="flex gap-6">
      <ProfileCard
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
      />
    </div>
  );
}

export default App;

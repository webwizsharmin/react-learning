import NotificationMessage from "./components/NotificationMessage";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <WelcomeMessage isLoggedIn={true} />
      <NotificationMessage />
      <UserProfile
        isLoading={false}
        data={{
          name: "Alex",
          age: 20,
        }}
      />
    </div>
  );
}

export default App;

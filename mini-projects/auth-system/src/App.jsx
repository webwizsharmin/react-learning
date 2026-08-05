import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <LoginForm
        onSubmit={({ email, password }) => {
          console.log("Login attempt:", email, password);
        }}
      />
    </div>
  );
}

export default App;

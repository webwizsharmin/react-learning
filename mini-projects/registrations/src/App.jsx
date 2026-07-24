import { Register } from "./auth/register";

function App() {
  return (
    <div>
      <Register
        title="Getting Started"
        description={`Already have an account? Sign in`}
      />
    </div>
  );
}

export default App;

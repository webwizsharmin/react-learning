import "./App.css";
import { Button } from "./components/button";

function App() {
  return (
    <>
      <Button text="Click Me!" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} padding={30} />
      <Button text="Click Me!" color="white" margin="48px" fontSize={26} />
    </>
  );
}

export default App;

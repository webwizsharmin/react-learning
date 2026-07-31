import Button from "./components/Buttons/ButtonR";
import Input from "./components/UI/input1";
function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 gap-6 p-6">
      <Button variant="primary">Save Client</Button>
      <Button variant="secondary" size="sm">
        Cancel
      </Button>
      <Button variant="danger" size="lg">
        Delete Project
      </Button>
      <Button variant="success">Approve</Button>
      <Button variant="warning">Archive</Button>
      <Button variant="outline">Back</Button>
      <Button variant="ghost">View Details</Button>
      <Input
        type="email"
        label="Client Email"
        placeholder="Enter Email"
        onChange={() => {}}
        error=""
        required
      />
      <Input
        type="password"
        label="Client password"
        placeholder="Enter Password"
        onChange={() => {}}
        error=""
        required
      />
      <Button variant="primary" fullWidth>
        Submit Form
      </Button>
    </div>
  );
}

export default App;

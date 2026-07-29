import Button from "./components/Buttons/ButtonR";
function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">
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
      <Button variant="primary" fullWidth>
        Submit Form
      </Button>
    </div>
  );
}

export default App;

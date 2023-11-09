import NavBar from "./components/Navbar";
import ScratcherList from "./components/ScratcherList";
import AddScratcher from "./components/AddScratcher"; // Import the AddScratcher component

function App() {
  return (
    <>
      <NavBar />
      <h1>Scratcher Examples</h1>
      <AddScratcher /> {/* Add the AddScratcher component to your App */}
      <ScratcherList />
    </>
  );
}

export default App;

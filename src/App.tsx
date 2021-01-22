import Navbar from "./components/navbar";
import Home from "./pages/Home/index";
import FAB from "./components/fab";
import HelpModal from "./components/modal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FAB />
      <HelpModal />
    </div>
  );
}

export default App;

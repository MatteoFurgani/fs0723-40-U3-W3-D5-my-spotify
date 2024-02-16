import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import Playerbar from "./components/Playerbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <Playerbar />
      </footer>
    </>
  );
}

export default App;

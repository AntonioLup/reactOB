import logo from "./logo.svg";
import "./App.css";
// import TaskList from "./components/container/task_list";
import Greetingstyled from "./components/pure/greetingstyled";
// import Ejemplo2 from "./hooks/Ejemplo2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetingstyled name={"antonio"} />
      </header>
    </div>
  );
}

export default App;

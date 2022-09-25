import logo from "./logo.svg";
import "./App.css";
// import TaskList from "./components/container/task_list";
import Greetingstyled from "./components/pure/greetingstyled";
import TaskComponent from "./components/pure/task";
import TaskList from "./components/container/task_list";
import Father from "./components/container/father";
// import Ejemplo2 from "./hooks/Ejemplo2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greetingstyled name={"antonio"} /> */}
        <TaskList />
      </header>
    </div>
  );
}

export default App;

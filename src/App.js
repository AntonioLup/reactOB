import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/container/task_list";
// import Greeting from "./components/greeting";
// import Fgreeting from "./components/Fgreeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name={"antonio"} />
        <Fgreeting props={"antonio"} /> */}
        <TaskList />
      </header>
    </div>
  );
}

export default App;

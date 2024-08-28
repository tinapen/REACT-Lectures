import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  const info = "Prop Drilling";
  return (
    <div className="App">
      <Header />
      <TaskList info={info} />
    </div>
  );
}
export default App;

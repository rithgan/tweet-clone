import SideBar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <SideBar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;

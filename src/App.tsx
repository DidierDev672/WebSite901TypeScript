import WithSubnavigation from "./components/Header";
import Home from "./containers/Home";
import './App.css'
import "./styles/App.scss";

function App() {
  return (
    <div>
      <WithSubnavigation />
      <Home />
    </div>
  )
}

export default App

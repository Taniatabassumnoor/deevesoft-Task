import logo from "./logo.svg";
import "./App.css";
import DesignPageHome from "./Components/DesignPage/DesignPageHome/DesignPageHome";
import NavBar from "./Components/Navbar/NavBar";
import Tesr from "./Components/Tesr/Tesr";
import Test from "./Components/Tesr/Test/Test";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tesr></Tesr>
      <Test></Test>
      <DesignPageHome></DesignPageHome>
    </div>
  );
}

export default App;

import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="Logo de freeCodeCamp" className="freecodecamp-logo" />
      </div>
    </div>
  );
}

export default App;

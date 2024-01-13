import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleChange = () => {
    setDarkTheme(prev => !prev);
  }

  return (
    <>
      <Card darkTheme={darkTheme} changeTheme={handleChange}/>
    </>
  );
}

export default App;

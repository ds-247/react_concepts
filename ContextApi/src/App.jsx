// Import necessary dependencies
import React, { useState } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import Card from "./components/Card";
import './App.css'

// App component
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeProvider value={{darkTheme, setDarkTheme}}>
      <Card />
    </ThemeProvider>
  );
}

export default App;

import Card from "./components/Card";
import ThemeContextProvider from "./context/ThemeContextProvider";
import "./App.css";

function App() {

  // no need to pass the props 

  return (
    <ThemeContextProvider>
      <Card />
    </ThemeContextProvider>
  );
}

export default App;

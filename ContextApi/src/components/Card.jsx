import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export default function Card() {

    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };
    const themStyle = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "gray",
            height: "400px",
            width: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "44px",
            border: "none",
            borderRadius: "20px"
    }

    const buttonStyle = {
        margin: "30px",
        backgroundColor: "rebeccapurple"
    }
    return (
      <>
      <button style={buttonStyle} onClick={handleClick}>Toggle</button>
        <div style={themStyle}>This is the theme section....</div>
      </>
    );
}
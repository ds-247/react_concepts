import useTheme from "../context/ThemeProvider";

export default function Card() {

    const {darkTheme, setDarkTheme} = useTheme();
    // console.log(darkTheme, "dark theme in cards")

  
    const themStyle = {
      backgroundColor: darkTheme ? "black" : "lightgray",
      color: darkTheme ? "white" : "gray",
      height: "400px",
      width: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "44px",
      border: "none",
      borderRadius: "20px",
    };

    const buttonStyle = {
        margin: "30px",
        backgroundColor: "rebeccapurple"
    }
    return (
      <>
      <button style={buttonStyle} onClick={() => setDarkTheme(!darkTheme)}>Toggle</button>
        <div style={themStyle}>This is the theme section....</div>
      </>
    );
}
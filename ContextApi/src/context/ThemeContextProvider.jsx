import React from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeContextProvider({children}) {

    // linked to state
    const [darkTheme, setDarkTheme] = React.useState(false);

    // can send states , functions, objects or any thing to the values 

    return (
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {children}
      </ThemeContext.Provider>
    );
}
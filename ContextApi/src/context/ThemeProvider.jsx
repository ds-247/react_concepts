import React from 'react';


export const ThemeContext  =  React.createContext({
    darkTheme: false,
    setDarkTheme: () => {}
});


export const ThemeProvider = ThemeContext.Provider;


// Custom hook 
// directly exporting the context  so that no need  to import usecontext and themecontext separatly
export default  function useTheme() {
    return React.useContext(ThemeContext);
}
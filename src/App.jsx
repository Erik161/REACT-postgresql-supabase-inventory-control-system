import styled from "styled-components";
import {AuthContextProvider, MyRoutes, Light, Dark} from "./index"
import { createContext, useState } from 'react'
export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse==="light" ? "light" : "dark";
  const themeStyle = theme==="light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes/>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display:grid;
  grid-template-columns:1fr;
  background-color:${(props)=>props.theme.bgtotal};
  
`;

export default App

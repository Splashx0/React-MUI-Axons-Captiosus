import "./App.css";
//import { Typography } from "@mui/material";
//import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./Pages/Home";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#13ca9d",
      contrastText: "#fff",
    },
    info: {
      main: "#000000",
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Router } from "./router";
import theme from "./assets/styles/theme";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

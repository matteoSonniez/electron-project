import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import styled from "styled-components";


function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;
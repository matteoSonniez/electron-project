import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import Home from "../screens/home";
import Register from "../screens/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;
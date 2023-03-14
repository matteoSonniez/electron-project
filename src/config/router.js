import { createBrowserRouter } from "react-router-dom";
import Login from "../screens/login";
import Home from "../screens/home";
import Register from "../screens/register";
import Friends from "../screens/friends";
import Profile from "../screens/profile";
import Discover from "../screens/discover";

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
  },
  {
    path: "/friends",
    element: <Friends />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/profile2",
    element: <Profile />
  },
  {
    path: "/discover",
    element: <Discover />
  }
]);

export default router;
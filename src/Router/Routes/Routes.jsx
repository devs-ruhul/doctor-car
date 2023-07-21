import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import About from "../../pages/About/About";
import Main from "../../Layout/Main";
import Services from "../../pages/Services/Services";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import LogIn from "../../pages/LogIn/LogIn";
import SignUp from "../../pages/SingUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

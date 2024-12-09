import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import Services from "../pages/Services";
import Vehicles from "../pages/Vehicles";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
    ],
  },
]);
export default router;

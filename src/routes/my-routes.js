import Home from "../pages/home";
import New from "../pages/new";
import Best from "../pages/best";
import Ask from "../pages/ask";
import Show from "../pages/show";
import Job from "../pages/job";
import Guidelines from "../pages/guidelines";
import Faq from "../pages/faq";

const MyRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/new",
    exact: true,
    element: <New />,
  },
  {
    path: "/best",
    exact: true,
    element: <Best />,
  },
  {
    path: "/ask",
    exact: true,
    element: <Ask/>,
  },
  {
    path: "/show",
    exact: true,
    element: <Show/>,
  },
  {
    path: "/job",
    exact: true,
    element: <Job/>,
  },
  {
    path: "/guidelines",
    exact: true,
    element: <Guidelines/>,
  },
  {
    path: "/faq",
    exact: true,
    element: <Faq/>,
  },
];

export default MyRoutes;

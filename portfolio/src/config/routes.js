import routes from "../constants/routes";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.about,
    Component: About,
  },
  {
    path: routes.contact,
    Component: Contact,
  },
  {
    path: routes.projects,
    Component: Projects,
  },
];

export default appRoutes;

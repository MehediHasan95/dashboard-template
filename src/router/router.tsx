import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/page/DashboardLayout";
import ErrorPage from "../common/ErrorPage/ErrorPage";
import Login from "../modules/Auth/page/Login";
import Dashboard from "../modules/Dashboard/page/Dashboard";
import PrivateRouter from "./PrivateRouter";
import Users from "../modules/Users/page/Users";
import Restaurants from "../modules/Restaurants/page/Restaurants";
import Ingredient from "../modules/Ingredient/page/Ingredient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter children={<DashboardLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "restaurants",
        element: <Restaurants />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "ingredient",
        element: <Ingredient />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import Events from "../pages/Events";
import Dashboard from "../pages/Dashboard";
import Forms from "../pages/Forms";
import AuthForms from "../components/Forms/AuthForms";
import OTPForm from "../components/Forms/OTPForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/event", element: <Events /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/login",
    element: (
      <Forms>
        <AuthForms />
      </Forms>
    ),
  },
  {
    path: "/verify",
    element: (
      <Forms>
        <OTPForm />
      </Forms>
    ),
  },
]);

export default router;

import {
  About,
  Contact,
  Donate,
  Error,
  Home,
  JoinUs,
  VolunteerOpportunity,
} from "@/pages";
import MainLayout from "../layouts/MainLayout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, PasswordReset, Register } from "@/pages/auth";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "reset-password",
            element: <PasswordReset />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "volunteer-opportunity",
            element: <VolunteerOpportunity />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "donate",
            element: <Donate />,
          },
          {
            path: "join-us",
            element: <JoinUs />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

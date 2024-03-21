import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./pages/public/Layout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";
import Pricing from "./pages/public/Pricing";
import { default as UserLayout } from "./pages/users/Layout";
import { signupAction, loginAction } from "./pages/public/actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "challenges",
        element: <p>Challenges</p>,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "login",
        action: loginAction,
        element: <Login />,
      },
      {
        path: "signup",
        action: signupAction,
        element: <Signup />,
      },
    ],
  },
  {
    path: "/users",
    element: <UserLayout />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load..</p>} />
  );
}

export default App;

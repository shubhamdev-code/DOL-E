import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./pages/landing/Layout";
import Home from "./pages/landing/Home";
import Login from "./pages/landing/Login";
import Signup from "./pages/landing/Signup";
import { signupAction, loginAction } from "./pages/landing/actions";
import { default as UserLayout } from "./pages/users/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        action: loginAction,
        element: <Login />,
      },
      {
        path: "/signup",
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./forms/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Not Found</p>,
    children: [
      {
        index: true,
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load..</p>} />
  );
}

export default App;

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div>
        <h1>Users Layout</h1>
        <p>Users Layout Page</p>
      </div>
      <Outlet />
    </>
  );
}

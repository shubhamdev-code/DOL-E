import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container mx-auto font-inter">
      <header className="flex flex-col justify-between text-center md:flex-row p-2">
        <h1 className="text-2xl font-semibold mb-2 ">DOL-E</h1>
        <nav className="flex flex-col justify-between items-center gap-4 md:flex-row">
          <ul className="flex flex-col flex-nowrap gap-4 md:flex-row">
            <li>Pricing</li>
            <li>Features</li>
            <li>Challenges</li>
          </ul>
          <button className="btn-dark">Log In</button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

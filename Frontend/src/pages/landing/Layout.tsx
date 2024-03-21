import { Outlet, Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="py-4 flex flex-col space-y-2 items-center justify-center md:flex-row md:space-y-0 md:justify-between md:px-16">
        <h1 className="font-semibold font-4xl">
          <Link to="/">DOL-E</Link>
        </h1>
        <nav>
          <ul className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-4 md:justify-end">
            <li>
              <NavLink to="challenges">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="pricing">Pricing</NavLink>
            </li>

            <li>
              <NavLink to="login" className="btn btn--dark">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="btn btn--dark">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <section>
          <h2>DOL-E</h2>
          <p>DOL-E protects your privacy</p>
          <ul>
            <li></li>
          </ul>
        </section>
      </footer>
    </>
  );
}

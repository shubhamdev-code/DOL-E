import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav className="flex-1 items-center justify-center">
          <h1 className="inline ">DOL-E</h1>
          <ul className="flex-1">
            <li className="inline">Features</li>
            <li className="inline">Community</li>
            <li className="inline">Challenges</li>
            <li className="inline">Subscriptions</li>
          </ul>
        </nav>
      </header>
      <main>
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

export default Layout;

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link class="nav-link active" to="/">Home</Link>
          </li>
          <li>
            <Link class="nav-link active" to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link  class="nav-link active" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
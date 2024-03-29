import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Products
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/singUp"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          SignUp
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar  bg-slate-500 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu text-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn font-bold  btn-ghost normal-case text-xl">
            Mobile Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white font-bold menu-horizontal px-1">
            {menuItems}
          </ul>
        </div>

        <div className="navbar-end flex gap-5">
          {/* card icon start */}
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">1</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card icon end */}

          {/* search  start */}
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>
          {/* search  end */}

          {/* setting  start */}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn  btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="../assets/img/images.jpeg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>

          {/* setting  end */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

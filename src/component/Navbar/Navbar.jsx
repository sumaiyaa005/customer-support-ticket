import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* navstart */}
      <div className="bg-white border-b border-gray-200">
        <div className="navbar py-0 flex-nowrap px-6 md:px-12 lg:px-20 ">
          {/* LEFT SIDE */}
          <div className="navbar-start flex items-center gap-3">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost p-1">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              {/* Dropdown */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>

                <li className="mt-2">
                  <button className="bg-gradient-to-r from-[#632EE3] to-[#9b5df2] text-white px-3 py-2 rounded-sm font-medium">
                    + New Ticket
                  </button>
                </li>
              </ul>
            </div>

            {/* LOGO */}
            <a className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-gray-800 whitespace-nowrap">
              CS — Ticket System
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="navbar-end hidden lg:flex flex-nowrap">
            <ul className="menu menu-horizontal items-center gap-2 flex-nowrap">
              <li>
                <a className="whitespace-nowrap">Home</a>
              </li>
              <li>
                <a className="whitespace-nowrap">FAQ</a>
              </li>
              <li>
                <a className="whitespace-nowrap">Changelog</a>
              </li>
              <li>
                <a className="whitespace-nowrap">Blog</a>
              </li>
              <li>
                <a className="whitespace-nowrap">Download</a>
              </li>
              <li>
                <a className="whitespace-nowrap">Contact</a>
              </li>

              <li>
                <button className="bg-gradient-to-r from-[#632EE3] to-[#9b5df2] text-white px-3 py-2 rounded-sm font-medium">
                  + New Ticket
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

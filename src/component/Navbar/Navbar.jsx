import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* navstart */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* LEFT */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu */}
              <div className="lg:hidden">
                <button className="p-2">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </button>
              </div>

              {/* Logo */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 whitespace-nowrap">
                CS — Ticket System
              </h1>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-6">
              {["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-[#632EE3] text-sm whitespace-nowrap"
                  >
                    {item}
                  </a>
                ),
              )}

              <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap shadow-md">
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

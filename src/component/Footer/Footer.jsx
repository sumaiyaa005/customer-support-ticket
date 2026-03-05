import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-neutral-content pt-16 md:pt-20 px-6 md:px-12 lg:px-20 pb-8 text-start mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Description */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold pb-2">CS – Ticket System</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              CS – Ticket System is a modern customer support management
              platform designed to help businesses track, manage, and resolve
              customer issues efficiently. Our system allows support teams to
              organize tickets, monitor progress, and deliver faster resolutions
              to improve overall customer satisfaction.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-bold pb-2">Company</h4>
            <div className="text-sm leading-8 text-gray-400">
              <a className="block hover:text-white">About Us</a>
              <a className="block hover:text-white">Careers</a>
              <a className="block hover:text-white">Blog</a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-bold pb-2">Services</h4>
            <div className="text-sm leading-8 text-gray-400">
              <a className="block hover:text-white">Ticket Management</a>
              <a className="block hover:text-white">Customer Support</a>
              <a className="block hover:text-white">Analytics & Reports</a>
            </div>
          </div>

          {/* Information */}
          <div className="md:col-span-2">
            <h4 className="font-bold pb-2">Information</h4>
            <div className="text-sm leading-8 text-gray-400">
              <a className="block hover:text-white">Privacy Policy</a>
              <a className="block hover:text-white">Terms & Conditions</a>
              <a className="block hover:text-white">Help Center</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold pb-2">Social Links</h4>

            <div className="flex flex-col text-sm leading-8 text-gray-400">
              <a className="flex items-center gap-2 hover:text-white">
                <i className="fa-brands fa-twitter text-lg"></i>
                csticketsystem
              </a>

              <a className="flex items-center gap-2 hover:text-white">
                <i className="fa-brands fa-linkedin text-lg"></i>
                cs-ticket-system
              </a>

              <a className="flex items-center gap-2 hover:text-white">
                <i className="fa-brands fa-facebook text-lg"></i>
                csticketsystem
              </a>

              <a className="flex items-center gap-2 hover:text-white">
                <i className="fa-solid fa-envelope text-lg"></i>
                csticketsystem.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
          <p>© 2026 CS – Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import LinkUp from "../assets/LinkUp.jpg";

const Sidebar = () => {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: "Customers",
      path: "/customers",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      name: "Add Customer",
      path: "/add-customer",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
    },
    {
      name: "Profile",
      path: "/profile",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-[#111936] border-r border-[#1e2952] flex flex-col justify-between p-4 shadow-xl">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 px-3 py-4 mb-6 border-b border-[#1e2952]">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#0c132c] flex items-center justify-center shadow-lg shadow-blue-500/30 border border-[#1e2952]">
            <img
              src={LinkUp}
              alt="LinkUp Store Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">
              LinkUp <span className="text-cyan-400">Store</span>
            </h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          <p className="px-3 text-xs font-bold text-blue-300/50 uppercase tracking-wider mb-2">
            Main Menu
          </p>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 font-semibold"
                    : "text-blue-100/70 hover:text-white hover:bg-[#1a254c]"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Footer System Status Badge */}
      <div className="p-3 bg-[#0c132c] rounded-xl border border-[#1e2952] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-blue-100 font-medium">Store Connected</span>
        </div>
        <span className="text-blue-300/40 font-mono text-[10px]">v1.0</span>
      </div>
    </aside>
  );
};

export default Sidebar;

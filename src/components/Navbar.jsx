import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 bg-[#111936]/90 backdrop-blur-md border-b border-[#1e2952] px-6 flex items-center justify-between sticky top-0 z-40 shadow-lg">
      {/* Left: Quick Search Bar */}
      <div className="flex items-center gap-3 w-96">
        <div className="relative w-full">
          <svg
            className="w-4 h-4 text-blue-300/60 absolute left-3.5 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search customers, orders, deals... (Ctrl + K)"
            className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 placeholder-blue-300/40 text-sm rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
          />
        </div>
      </div>

      {/* Right: Notifications & User Profile */}
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <button className="relative p-2 text-blue-200/70 hover:text-white bg-[#0c132c] hover:bg-[#1a254c] border border-[#1e2952] rounded-xl transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          {/* Active Cyan Badge */}
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 ring-2 ring-[#111936]"></span>
        </button>

        {/* User Profile Badge */}
        <div className="flex items-center gap-3 pl-4 border-l border-[#1e2952]">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
              A
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-cyan-400 border-2 border-[#111936] rounded-full"></span>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-semibold text-white leading-tight">Admin User</h2>
              <span className="px-1.5 py-0.5 text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 rounded-md">
                CRM Manager
              </span>
            </div>
            <p className="text-xs text-blue-200/60 mt-0.5">admin@linkupstore.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React from "react";

const Navbar = () => {
  return (
    <header className="h-16 bg-[#111936]/90 backdrop-blur-md border-b border-[#1e2952] px-6 flex items-center justify-end sticky top-0 z-40 shadow-lg">
      {/* Right: User Profile Badge */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
            A
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-cyan-400 border-2 border-[#111936] rounded-full"></span>
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm font-semibold text-white leading-tight">
              Admin User
            </h2>
            <span className="px-1.5 py-0.5 text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 rounded-md">
              CRM Manager
            </span>
          </div>
          <p className="text-xs text-blue-200/60 mt-0.5">
            admin@linkupstore.com
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

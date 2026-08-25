import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex min-h-screen bg-[#0a1128] text-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />

        <main className="flex-1 p-6 bg-[#0a1128] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;

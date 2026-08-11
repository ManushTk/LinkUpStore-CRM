import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
      <div className="w-20 h-20 bg-rose-950/80 border border-rose-800 rounded-3xl flex items-center justify-center text-rose-400 text-3xl font-black shadow-xl">
        404
      </div>
      <h1 className="text-3xl font-bold text-white tracking-tight">
        Page Not Found
      </h1>
      <p className="text-sm text-blue-200/60 max-w-md">
        The page you are looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/20 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;

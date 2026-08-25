import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { customersApi } from "../services/api";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  const getData = async () => {
    try {
      const res = await customersApi.get();
      const actualData = res.data;
      setCustomers(actualData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Helper function to count customers by status safely
  const getCountByStatus = (statusName) => {
    return customers.filter(
      (customer) => customer.status?.toLowerCase() === statusName.toLowerCase(),
    ).length;
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs text-blue-200/60 mt-0.5">
            Welcome to LinkUp Store CRM Overview
          </p>
        </div>
        <Link
          to="/add-customer"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/20 transition"
        >
          + Add Customer
        </Link>
      </div>

      {/* Primary KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Total Customers */}
        <div className="bg-[#111936] border border-[#1e2952] rounded-2xl p-5 shadow-xl">
          <span className="text-xs text-blue-200/60 uppercase font-semibold">
            Total Customers
          </span>
          <h2 className="text-3xl font-bold text-white mt-2">
            {customers.length}
          </h2>
        </div>
      </div>

      {/* Customer Status Breakdown Cards (All Statuses) */}
      <div>
        <h3 className="text-sm font-bold text-white mb-3">
          Customer Status Breakdown
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="bg-[#111936] border border-[#1e2952] rounded-xl p-4 shadow-lg">
            <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
              🟢 Active
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              {getCountByStatus("active")}
            </h4>
          </div>

          <div className="bg-[#111936] border border-[#1e2952] rounded-xl p-4 shadow-lg">
            <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
              🟡 Pending
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              {getCountByStatus("pending")}
            </h4>
          </div>

          <div className="bg-[#111936] border border-[#1e2952] rounded-xl p-4 shadow-lg">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
              🔵 Contacted
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              {getCountByStatus("called")}
            </h4>
          </div>

          <div className="bg-[#111936] border border-[#1e2952] rounded-xl p-4 shadow-lg">
            <span className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider block">
              🟣 Completed
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              {getCountByStatus("completed")}
            </h4>
          </div>

          <div className="bg-[#111936] border border-[#1e2952] rounded-xl p-4 shadow-lg col-span-2 sm:col-span-1">
            <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block">
              🔴 Inactive
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              {getCountByStatus("inactive")}
            </h4>
          </div>
        </div>
      </div>

      {/* Quick Navigation Box */}
      <div className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl space-y-3">
        <h3 className="text-sm font-bold text-white">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/customers"
            className="px-4 py-2 bg-[#0c132c] hover:bg-[#1a254c] text-cyan-400 border border-[#1e2952] rounded-xl text-xs font-semibold transition"
          >
            👥 View All Customers
          </Link>
          <Link
            to="/add-customer"
            className="px-4 py-2 bg-[#0c132c] hover:bg-[#1a254c] text-indigo-300 border border-[#1e2952] rounded-xl text-xs font-semibold transition"
          >
            ➕ Register New Customer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

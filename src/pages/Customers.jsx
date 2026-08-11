import React, { useEffect, useState } from "react";
import { customersApi } from "../services/api";
import { Link } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getData = async () => {
    try {
      const res = await customersApi.get();
      setCustomers(res.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const dltcustomer = async (id) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      await customersApi.delete(`/${id}`);
      const newData = customers.filter((customer) => customer.id !== id);
      setCustomers(newData);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);

  // Helper function for status colors
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-emerald-950/80 text-emerald-400 border-emerald-800";
      case "pending":
        return "bg-amber-950/80 text-amber-400 border-amber-800";
      case "called":
        return "bg-cyan-950/80 text-cyan-400 border-cyan-800";
      case "inactive":
        return "bg-rose-950/80 text-rose-400 border-rose-800";
      default:
        return "bg-slate-800 text-slate-300 border-slate-700";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Customers
          </h1>
          <p className="text-xs sm:text-sm text-blue-200/60 mt-0.5">
            Manage your retail store buyers and B2B clients
          </p>
        </div>

        <Link to="/add-customer">
          <button className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow-lg shadow-blue-500/20 text-center">
            + Add Customer
          </button>
        </Link>
      </div>

      <div className="bg-transparent sm:bg-[#111936] sm:border sm:border-[#1e2952] sm:rounded-2xl overflow-hidden sm:shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="hidden sm:table-header-group bg-[#0c132c] text-blue-200/70 uppercase text-[11px] tracking-wider border-b border-[#1e2952]">
            <tr>
              <th className="py-3.5 px-6 font-semibold">Name</th>
              <th className="py-3.5 px-6 font-semibold">Company</th>
              <th className="py-3.5 px-6 font-semibold">Phone</th>
              <th className="py-3.5 px-6 font-semibold">Status</th>
              <th className="py-3.5 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="space-y-3 sm:space-y-0 sm:divide-y sm:divide-[#1e2952]/60 text-sm">
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="block sm:table-row bg-[#111936] sm:bg-transparent border border-[#1e2952] sm:border-none rounded-xl p-4 sm:p-0 hover:bg-[#161f42] transition-colors"
              >
                <td className="block sm:table-cell py-1 sm:py-4 px-0 sm:px-6 font-medium text-white">
                  <div className="text-base sm:text-sm font-bold sm:font-medium">
                    {customer.name}
                  </div>
                  <div className="text-xs text-blue-200/50 font-normal">
                    {customer.email}
                  </div>
                </td>

                <td className="flex justify-between items-center sm:table-cell py-1.5 sm:py-4 px-0 sm:px-6 text-slate-300">
                  <span className="sm:hidden text-xs font-semibold text-blue-300/50 uppercase">
                    Company
                  </span>
                  <span>{customer.company || "—"}</span>
                </td>

                <td className="flex justify-between items-center sm:table-cell py-1.5 sm:py-4 px-0 sm:px-6 text-slate-300 font-mono text-xs">
                  <span className="sm:hidden text-xs font-semibold text-blue-300/50 uppercase font-sans">
                    Phone
                  </span>
                  <span>{customer.phone}</span>
                </td>

                <td className="flex justify-between items-center sm:table-cell py-1.5 sm:py-4 px-0 sm:px-6">
                  <span className="sm:hidden text-xs font-semibold text-blue-300/50 uppercase">
                    Status
                  </span>
                  <span
                    className={`px-2.5 py-0.5 sm:py-1 text-xs font-semibold rounded-full border capitalize ${getStatusBadge(
                      customer.status,
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="block sm:table-cell py-2 sm:py-4 px-0 sm:px-6 text-right border-t sm:border-none border-[#1e2952] mt-2 sm:mt-0 pt-2 sm:pt-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="flex-1 sm:flex-initial py-1.5 px-3 bg-[#0c132c] hover:bg-cyan-950 text-cyan-400 border border-cyan-800/60 rounded-lg text-xs font-medium transition text-center">
                      View
                    </button>
                    <button className="flex-1 sm:flex-initial py-1.5 px-3 bg-[#0c132c] hover:bg-indigo-950 text-indigo-300 border border-indigo-800/60 rounded-lg text-xs font-medium transition text-center">
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dltcustomer(customer.id);
                      }}
                      className="flex-1 sm:flex-initial py-1.5 px-3 bg-[#0c132c] hover:bg-rose-950 text-rose-400 border border-rose-800/60 rounded-lg text-xs font-medium transition text-center"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { customersApi } from "../services/api";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await customersApi.get(`/${id}`);
        setCustomer(res.data);
      } catch (error) {
        console.error("Error loading customer profile:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this customer?")) {
      await customersApi.delete(`/${id}`);
      navigate("/customers");
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-blue-200/60 font-medium">
        <div className="flex items-center gap-3">
          <span className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></span>
          <span>Loading customer profile...</span>
        </div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="text-center py-12 space-y-4">
        <p className="text-rose-400 font-semibold">
          Customer profile not found.
        </p>
        <Link
          to="/customers"
          className="inline-block px-4 py-2 bg-[#111936] text-blue-200 border border-[#1e2952] rounded-xl text-xs"
        >
          ← Back to Customers
        </Link>
      </div>
    );
  }

  // Get Initials for Avatar Badge (e.g. "Rahul Sharma" -> "RS")
  const initials = customer.name
    ? customer.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "CU";

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/customers"
          className="px-3.5 py-2 bg-[#0c132c] hover:bg-[#1a254c] text-blue-200 border border-[#1e2952] rounded-xl text-xs font-medium transition flex items-center gap-1.5"
        >
          <span>← Back to Customers</span>
        </Link>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Edit Button */}
          <Link
            to={`/edit-customer/${customer.id}`}
            className="px-4 py-2 bg-[#0c132c] hover:bg-indigo-950 text-indigo-300 border border-indigo-800/60 rounded-xl text-xs font-semibold transition"
          >
            ✏️ Edit Profile
          </Link>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-[#0c132c] hover:bg-rose-950 text-rose-400 border border-rose-800/60 rounded-xl text-xs font-semibold transition"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Main Banner Card */}
      <div className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Avatar Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 border border-cyan-400/30 shrink-0">
            {initials}
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {customer.name}
              </h1>
              <span
                className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border capitalize ${getStatusBadge(customer.status)}`}
              >
                {customer.status || "Active"}
              </span>
            </div>
            <p className="text-xs text-blue-200/60 mt-1">
              {customer.email || "No email provided"}
            </p>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {customer.phone && (
            <a
              href={`tel:${customer.phone}`}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#0c132c] hover:bg-[#1a254c] text-cyan-400 border border-[#1e2952] rounded-xl text-xs font-semibold text-center transition"
            >
              📞 Call
            </a>
          )}
          {customer.email && (
            <a
              href={`mailto:${customer.email}`}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#0c132c] hover:bg-[#1a254c] text-indigo-300 border border-[#1e2952] rounded-xl text-xs font-semibold text-center transition"
            >
              ✉️ Email
            </a>
          )}
        </div>
      </div>

      {/* 2-Column Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Info (2 Columns) */}
        <div className="md:col-span-2 bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl space-y-4">
          <h2 className="text-xs font-bold text-blue-300/60 uppercase tracking-wider border-b border-[#1e2952] pb-3">
            Contact & Location Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-[#0c132c] p-3.5 rounded-xl border border-[#1e2952]/60">
              <span className="text-[11px] font-semibold text-blue-300/50 uppercase block">
                Phone Number
              </span>
              <p className="font-mono text-slate-200 mt-0.5">
                {customer.phone || "—"}
              </p>
            </div>

            <div className="bg-[#0c132c] p-3.5 rounded-xl border border-[#1e2952]/60">
              <span className="text-[11px] font-semibold text-blue-300/50 uppercase block">
                Company / Store
              </span>
              <p className="font-medium text-slate-200 mt-0.5">
                {customer.company || "—"}
              </p>
            </div>

            <div className="bg-[#0c132c] p-3.5 rounded-xl border border-[#1e2952]/60">
              <span className="text-[11px] font-semibold text-blue-300/50 uppercase block">
                City / Location
              </span>
              <p className="font-medium text-slate-200 mt-0.5">
                {customer.city || "—"}
              </p>
            </div>

            <div className="bg-[#0c132c] p-3.5 rounded-xl border border-[#1e2952]/60">
              <span className="text-[11px] font-semibold text-blue-300/50 uppercase block">
                Account Status
              </span>
              <p className="font-medium text-cyan-400 capitalize mt-0.5">
                {customer.status || "Active"}
              </p>
            </div>
          </div>
        </div>

        {/* Account Info & Notes (1 Column) */}
        <div className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl space-y-4">
          <h2 className="text-xs font-bold text-blue-300/60 uppercase tracking-wider border-b border-[#1e2952] pb-3">
            Account & Notes
          </h2>

          <div>
            <span className="text-[11px] font-semibold text-blue-300/50 uppercase block mb-1.5">
              Customer Notes
            </span>
            <p className="text-xs text-slate-300 bg-[#0c132c] p-3.5 rounded-xl border border-[#1e2952]/60 min-h-[90px] leading-relaxed">
              {customer.notes || "No notes added for this customer."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCustomer;

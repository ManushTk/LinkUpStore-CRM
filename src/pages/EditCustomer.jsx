import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";
import { customersApi } from "../services/api";

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // 1. Load existing customer details into form
  useEffect(() => {
    const getCustomerData = async () => {
      const res = await customersApi.get(`/${id}`);
      reset(res.data); // Pre-fills all form fields with existing data!
    };
    getCustomerData();
  }, [id, reset]);

  // 2. Save updated details to API
  const onSubmit = async (data) => {
    await customersApi.put(`/${id}`, data);
    alert("Customer updated successfully! 🚀");
    navigate("/customers");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-tight">Edit Customer</h1>
        <Link to="/customers" className="px-3.5 py-2 bg-[#0c132c] text-blue-200 border border-[#1e2952] rounded-xl text-xs">
          ← Back to Customers
        </Link>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl space-y-6">
        
        {/* 2-Column Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Full Name *</label>
            <input
              type="text"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Email Address *</label>
            <input
              type="email"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Phone Number *</label>
            <input
              type="tel"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone.message}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Company</label>
            <input
              type="text"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("company")}
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">City</label>
            <input
              type="text"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("city")}
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Status *</label>
            <select
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400 cursor-pointer"
              {...register("status", { required: "Status is required" })}
            >
              <option value="pending">Pending</option>
              <option value="called">Called</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="completed">Completed</option>
            </select>
          </div>

        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">Notes</label>
          <textarea
            rows="3"
            className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 resize-none"
            {...register("notes")}
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 border-t border-[#1e2952] pt-4">
          <Link to="/customers" className="px-5 py-2 bg-[#0c132c] text-blue-200 rounded-xl text-xs font-medium">
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/20"
          >
            Update Customer
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditCustomer;
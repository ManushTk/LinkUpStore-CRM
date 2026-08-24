import React from "react";
import { useForm } from "react-hook-form";
import { customersApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await customersApi.post("", data);
      alert("Data submitted successfull..");
      navigate("/customers");
    } catch (err) {
      alert("Server issue found");
      console.log("something went wrong...", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Add Customer</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl"
      >
        {/* 2-Column Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-xs text-rose-400 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
            />
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-xs text-rose-400 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Company
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("company")}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              City
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-400"
              {...register("city")}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
              Status *
            </label>
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
            {errors.status && (
              <p className="text-xs text-rose-400 mt-1">
                {errors.status.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">
            Notes
          </label>
          <textarea
            rows="4"
            placeholder="Enter customer notes..."
            className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 resize-none"
            {...register("notes")}
          ></textarea>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg transition"
          >
            Add Customer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;

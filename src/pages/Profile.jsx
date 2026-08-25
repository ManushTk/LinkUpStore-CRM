import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@linkupstore.com",
    phone: "+91 98765 43210",
    role: "CRM Manager",
    location: "Kochi, Kerala",
  });

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully! 🚀");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
          AU
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {profile.name}
          </h1>
          <p className="text-xs text-cyan-400 font-semibold mt-0.5">
            {profile.role}
          </p>
        </div>
      </div>

      {/* Edit Profile Form */}
      <form
        onSubmit={handleSave}
        className="bg-[#111936] border border-[#1e2952] rounded-2xl p-6 shadow-xl space-y-4"
      >
        <h2 className="text-sm font-bold text-white border-b border-[#1e2952] pb-3">
          Admin Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          {/* Name */}
          <div>
            <label className="block text-xs text-blue-200/60 uppercase mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 rounded-xl px-3.5 py-2 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-blue-200/60 uppercase mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 rounded-xl px-3.5 py-2 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs text-blue-200/60 uppercase mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 rounded-xl px-3.5 py-2 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-xs text-blue-200/60 uppercase mb-1">
              Role
            </label>
            <input
              type="text"
              value={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              className="w-full bg-[#0c132c] border border-[#1e2952] text-slate-100 rounded-xl px-3.5 py-2 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/20"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

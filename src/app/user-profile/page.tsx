// components/UserProfileCard.tsx
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeInput from "@/components/input";
import HomeButton from "@/components/button";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/lib/profile";

const UserProfileCard = () => {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState({
    fullNames: "",
    email: "",
    phone: "",
    gender: "",
    avatar: "",
    isActive: false,
  });

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setProfile((prev) => ({ ...prev, [name]: value }));
};

  const saveChanges = async () => {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/update-profile`,
        profile,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (profileData) {
      setProfile(profileData);
    }
  }, [profileData]);

  if (isLoading) return <p className="text-center py-10">Loading profile...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow-xl rounded-xl my-10">
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <img
          src={
            profile?.avatar ||
            "https://ui-avatars.com/api/?name=" +
              encodeURIComponent(profile?.fullNames || "")
          }
          alt="Avatar"
          className="w-24 h-24 rounded-full border object-cover"
        />
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <HomeInput
          type="text"
          placeholder="Full Names"
          name="fullNames"
          value={profile.fullNames}
          onChange={handleChange}
          disabled={!editing}
        />

        {/* Email (read-only) */}
        <HomeInput
          type="email"
          placeholder="Email"
          name="email"
          value={profile.email}
          disabled
        />

        {/* Phone Number */}
        <HomeInput
          type="tel"
          placeholder="Phone Number"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          disabled={!editing}
        />

        <div className="flex items-center justify-between">
          <select
            name="gender"
            value={profile.gender}
            onChange={(e) =>
              setProfile((prev) => ({ ...prev, gender: e.target.value }))
            }
            disabled={!editing}
            className={` px-4 h-11 border border-[#E8ECEF] rounded-lg w-1/2`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <div>
            <span className="text-sm font-medium text-gray-600">Status: </span>
            <span
              className={`px-2 py-1 rounded-full text-sm font-medium ${
                profile.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {profile.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>
      </div>

      {/* Status */}

      {/* Actions */}
      <div className="mt-6 flex w-full">
        {editing ? (
          <div className="w-full">
            <HomeButton
              title={saving ? "Saving..." : "Save"}
              type="button"
              bg="#193A8E"
              width="100%"
              height="45px"
              onClick={saveChanges}
              disabled={
                saving || !profile.fullNames || !profile.email || !profile.phone
              }
            />
            <HomeButton
              title="Cancel"
              type="button"
              bg="bg-gray-300"
              width="100%"
              height="45px"
              onClick={() => setEditing(false)}
              disabled={saving}
            />
          </div>
        ) : (
          <HomeButton
            title="Edit Profile"
            type="button"
            bg="#FF6933"
            width="100%"
            height="45px"
            onClick={() => setEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;

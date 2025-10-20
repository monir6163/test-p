'use client';
import {
  CalendarIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'Babul',
    lastName: 'Akter',
    email: 'babul.akter@sarafcard.io',
    phone: '1740020464',
    callingCode: '+880',
    country: 'Bangladesh',
    joined: '2025-01-01',
    verified: true,
  });

  useEffect(() => {
    // admin_info get form local storage (read once)
    const storedAdminInfo = localStorage.getItem('admin_info');
    if (!storedAdminInfo) return;
    const parsedAdminInfo = JSON.parse(storedAdminInfo);
    setProfile((prev) => ({
      ...prev,
      firstName: parsedAdminInfo.name?.split(' ')[0] || prev.firstName,
      lastName: parsedAdminInfo.name?.split(' ')[1] || prev.lastName,
      email: parsedAdminInfo.email || prev.email,
      phone: parsedAdminInfo.phone ?? prev.phone,
      callingCode: parsedAdminInfo.callingCode ?? prev.callingCode,
      country: parsedAdminInfo.country || prev.country,
      joined: parsedAdminInfo.joined || prev.joined,
      verified: parsedAdminInfo.verified ?? prev.verified,
    }));
  }, []);

  const [form, setForm] = useState({
    phone: profile.phone ?? '',
    callingCode: profile.callingCode ?? '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setProfile((prev) => ({
      ...prev,
      phone: form.phone,
      callingCode: form.callingCode,
    }));
    setIsEditing(false);
    toast.success('Profile updated successfully!', {
      duration: 3000,
      description: 'Your profile information has been updated.',
    });
  };

  const handleCancel = () => {
    setForm({
      phone: profile.phone ?? '',
      callingCode: profile.callingCode ?? '',
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-xl p-6 shadow-lg mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-day-text dark:text-night-text">
            My Profile
          </h1>
          <p className="text-day-text-muted dark:text-night-text-muted">
            Manage your account information and preferences
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="glass-card p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
              <span className="text-black dark:text-white text-3xl font-bold">
                {profile.firstName[0]}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-day-text dark:text-night-text">
              {profile.firstName && profile.lastName
                ? `${profile.firstName} ${profile.lastName}`
                : profile.email.split('@')[0] || 'User'}
            </h3>
            <p className="text-day-text-muted dark:text-night-text-muted">
              {profile.email}
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              {profile.verified && (
                <>
                  <CheckBadgeIcon className="h-5 w-5 text-success-500" />
                  <span className="text-sm text-success-600 dark:text-success-400">
                    Verified Account
                  </span>
                </>
              )}
            </div>
            <div className="mt-6 pt-6 border-t border-day-border dark:border-night-border">
              <div className="text-sm text-day-text-muted dark:text-night-text-muted">
                <div className="flex items-center justify-center space-x-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Joined {profile.joined}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-day-text dark:text-night-text">
                Account Information
              </h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-primary"
                >
                  Edit Profile
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <button onClick={handleCancel} className="btn-secondary">
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Save Changes</span>
                  </button>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
                  <input
                    type="email"
                    value={profile.email}
                    disabled
                    className="input-glass pl-10 opacity-60 cursor-not-allowed"
                  />
                </div>
                <p className="mt-1 text-xs text-day-text-muted dark:text-night-text-muted">
                  Email address cannot be changed for security reasons
                </p>
              </div>

              {/* Phone Number */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Country Code
                  </label>
                  <select
                    name="callingCode"
                    value={form.callingCode ?? ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="input-glass"
                  >
                    <option value="+880">+880 (BD)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+49">+49 (DE)</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone ?? ''}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Enter your phone number"
                      className="input-glass pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div>
                <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                  Account Status
                </label>
                <div className="flex items-center space-x-2">
                  <div className="badge-active">
                    {profile.verified ? 'Verified' : 'Pending Verification'}
                  </div>
                  <CheckBadgeIcon className="h-5 w-5 text-success-500" />
                </div>
              </div>

              {/* Account Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Account Created
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
                    <input
                      type="text"
                      value={profile.joined}
                      disabled
                      className="input-glass pl-10 opacity-60 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Last Updated
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-day-text-muted dark:text-night-text-muted" />
                    <input
                      type="text"
                      value={new Date().toLocaleDateString()}
                      disabled
                      className="input-glass pl-10 opacity-60 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Security Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold text-day-text dark:text-night-text mb-3">
          Security & Privacy
        </h3>
        <div className="space-y-3 text-sm text-day-text-muted dark:text-night-text-muted">
          <p>
            • Your email address is used for account identification and cannot
            be changed
          </p>
          <p>
            • Phone number updates help us provide better security and support
          </p>
          <p>• All profile changes are logged for security purposes</p>
          <p>• For major account changes, please contact our support team</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;

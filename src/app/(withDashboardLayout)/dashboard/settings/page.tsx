'use client';

import { BellIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SettingPage() {
  // Demo data for notification settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    transactionAlerts: false,
    pushNotifications: true,
  });

  // Demo handler for toggles (local state only)
  const handleNotificationToggle = (key: string, value: boolean) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // TODO: Replace demo data and handlers with API logic when available

  const settingSections = [
    {
      title: 'Notifications',
      icon: BellIcon,
      settings: [
        {
          name: 'Email Notifications',
          description: 'Receive notifications via email',
          type: 'toggle',
          value: notificationSettings.emailNotifications,
          onChange: (value: boolean) =>
            handleNotificationToggle('emailNotifications', value),
        },
        {
          name: 'Transaction Alerts',
          description: 'Get notified of all transactions',
          type: 'toggle',
          value: notificationSettings.transactionAlerts,
          onChange: (value: boolean) =>
            handleNotificationToggle('transactionAlerts', value),
        },
        {
          name: 'Push Notifications',
          description: 'Browser push notifications',
          type: 'toggle',
          value: notificationSettings.pushNotifications,
          onChange: (value: boolean) =>
            handleNotificationToggle('pushNotifications', value),
        },
      ],
    },
    {
      title: 'Security',
      icon: ShieldCheckIcon,
      settings: [
        {
          name: 'Login Notifications',
          description: 'Get notified of new login attempts',
          type: 'info',
          value: 'Always enabled for security',
        },
        {
          name: 'Session Timeout',
          description: 'Automatic logout after inactivity',
          type: 'info',
          value: '30 minutes',
        },
      ],
    },
  ];

  const handleExportData = () => {
    toast.success('Data exported successfully!', {
      icon: <ShieldCheckIcon className="h-5 w-5" />,
      description: 'Your data has been exported.',
      duration: 3000,
    });
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
            Settings
          </h1>
          <p className="text-day-text-muted dark:text-night-text-muted">
            Manage your account preferences and settings
          </p>
        </div>
      </motion.div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                <section.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-xl font-semibold text-day-text dark:text-night-text">
                {section.title}
              </h2>
            </div>

            <div className="space-y-4">
              {section.settings.map((setting, settingIndex) => (
                <motion.div
                  key={setting.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: sectionIndex * 0.1 + settingIndex * 0.05,
                  }}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-day-text dark:text-night-text">
                      {setting.name}
                    </h3>
                    <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                      {setting.description}
                    </p>
                  </div>

                  <div className="ml-4">
                    {setting.type === 'toggle' ? (
                      <button
                        onClick={() => {
                          if (
                            setting.type === 'toggle' &&
                            typeof (setting as any).onChange === 'function'
                          ) {
                            (setting as any).onChange(
                              !(setting.value as boolean)
                            );
                          }
                        }}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          setting.value
                            ? 'bg-black dark:bg-slate-900'
                            : 'bg-slate-900 dark:bg-slate-800'
                        }`}
                        style={{
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    ) : (
                      <span className="text-sm text-day-text-muted dark:text-night-text-muted">
                        {setting.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Account Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-6"
      >
        <h2 className="text-xl font-semibold text-day-text dark:text-night-text mb-6">
          Account Actions
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="text-sm font-medium text-day-text dark:text-night-text">
                Export Account Data
              </h3>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Download your account information and transaction history
              </p>
            </div>
            <button
              onClick={handleExportData}
              className="glass-card px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              Export Data
            </button>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <h3 className="text-sm font-medium text-day-text dark:text-night-text">
                Contact Support
              </h3>
              <p className="text-sm text-day-text-muted dark:text-night-text-muted">
                Get help with your account or report issues
              </p>
            </div>
            <Link href="/dashboard/support" className="btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Privacy Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-6"
      >
        <h3 className="text-lg font-semibold text-day-text dark:text-night-text mb-3">
          Privacy & Data
        </h3>
        <div className="space-y-3 text-sm text-day-text-muted dark:text-night-text-muted">
          <p>• Your settings are stored securely and encrypted</p>
          <p>• Notification preferences can be changed at any time</p>
          <p>• We never share your personal information with third parties</p>
          <p>• For more information, please review our Privacy Policy</p>
        </div>
      </motion.div>
    </div>
  );
}

'use client';

import LoadingSpinner from '@/components/Loading';
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export default function RedeemPage() {
  const [pin, setPin] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'pin' | 'email' | 'success'>('pin');

  const handlePinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 16) {
      toast.error('PIN must be 16 characters long');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call to validate PIN
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock validation - in real app, call your backend API
      if (pin === '1234567890123456') {
        setStep('email');
      } else {
        toast.error('Invalid PIN. Please check and try again.');
      }
    } catch {
      toast.error('Failed to validate PIN. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call to create account
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStep('success');
      toast.success('Account created successfully!');

      // Redirect to login after 3 seconds
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch {
      toast.error('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-day-bg via-day-surface to-day-surface-alt dark:from-night-bg dark:via-night-surface dark:to-night-surface-alt">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C0C0C0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-8 left-8"
        >
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-day-text-muted dark:text-night-text-muted hover:text-day-text dark:hover:text-night-text transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back</span>
          </Link>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md bg-glass-gradient-day dark:bg-glass-gradient-night backdrop-blur-premium border border-day-border dark:border-night-border rounded-2xl shadow-3d dark:shadow-3d-dark p-8"
        >
          {step === 'pin' && (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-premium-gradient rounded-2xl flex items-center justify-center mb-4 shadow-premium">
                  <KeyIcon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-day-text dark:text-night-text mb-2">
                  Redeem Your PIN
                </h1>
                <p className="text-day-text-muted dark:text-night-text-muted">
                  Enter the 16-digit PIN from your SarafCard package
                </p>
              </div>

              <form onSubmit={handlePinSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    value={pin}
                    onChange={(e) =>
                      setPin(e.target.value.replace(/\D/g, '').slice(0, 16))
                    }
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 bg-day-surface-glass dark:bg-night-surface-glass backdrop-blur-glass border border-day-border dark:border-night-border rounded-xl text-day-text dark:text-night-text placeholder-day-text-muted dark:placeholder-night-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-mono text-center tracking-widest"
                    maxLength={16}
                    required
                  />
                  <p className="mt-2 text-xs text-day-text-muted dark:text-night-text-muted">
                    Enter all 16 digits without spaces
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading || pin.length !== 16}
                  className="flex-1 px-4 py-2 w-full bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-transparent dark:hover:border-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-4 h-4 animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    'Validate PIN'
                  )}
                </button>
              </form>
            </>
          )}

          {step === 'email' && (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-success-500 rounded-2xl flex items-center justify-center mb-4 shadow-premium">
                  <CheckCircleIcon className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-day-text dark:text-night-text mb-2">
                  PIN Validated!
                </h1>
                <p className="text-day-text-muted dark:text-night-text-muted">
                  Now create your account with your email address
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-day-text dark:text-night-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-day-surface-glass dark:bg-night-surface-glass backdrop-blur-glass border border-day-border dark:border-night-border rounded-xl text-day-text dark:text-night-text placeholder-day-text-muted dark:placeholder-night-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="flex-1 px-4 py-2 w-full bg-white dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/60 dark:border-gray-700/50 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:border-transparent dark:hover:border-gray-600 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-4 h-4 animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </form>
            </>
          )}

          {step === 'success' && (
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-success-500 rounded-2xl flex items-center justify-center mb-4 shadow-premium animate-bounce">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-day-text dark:text-night-text mb-2">
                Account Created!
              </h1>
              <p className="text-day-text-muted dark:text-night-text-muted mb-6">
                Your SarafCard account has been successfully created. You'll be
                redirected to login shortly.
              </p>
              <div className="animate-pulse">
                <LoadingSpinner />
              </div>
            </div>
          )}
        </motion.div>

        {/* Help Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-day-text-muted dark:text-night-text-muted">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <span className="text-sm">
              Can't find your PIN? Contact support for assistance
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

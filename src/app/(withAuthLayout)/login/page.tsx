'use client';

import { storeAdminInfo, storeToken } from '@/services/auth.service';
import { motion } from 'framer-motion';
// import { useLoginMutation, useVerifyOtpMutation } from '@/redux/api/userApi';
// import { LoginFormSchema } from '@/types/Forms.types';
// import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FiArrowLeft, FiCheck, FiSend, FiX } from 'react-icons/fi';
import LoginTab from './LoginTab';
import RegisterTab from './RedeemTab';

const Login = () => {
  const router = useRouter();
  // const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  // const [verifyOtp, { isLoading: isVerifyLoading }] = useVerifyOtpMutation();
  const [isLoginLoading] = useState(false);
  const [isVerifyLoading, setIsVerifyLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'redeem'>('login');

  // State for OTP modal
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const reset = () => {
    setEmail('');
    setEmailError('');
    setOtp(['', '', '', '', '', '']);
  };

  // const handleSendOTP = async (loginData: FieldValues) => {
  //   const { email } = loginData;

  //   if (!email) {
  //     toast.error('Email is required', {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //     return;
  //   }

  //   // Basic email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     toast.error('Please enter a valid email address', {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //     return;
  //   }

  //   try {
  //     const response = await login(loginData).unwrap();

  //     if (response?.statusCode === 200) {
  //       setUserEmail(email);
  //       setShowOtpModal(true);
  //       toast.success(response?.message || 'OTP code sent to your email', {
  //         position: 'bottom-right',
  //         duration: 1500,
  //         icon: '✅',
  //       });
  //     } else {
  //       toast.error(
  //         response?.message || 'Failed to send OTP. Please try again.',
  //         {
  //           position: 'bottom-right',
  //           duration: 1500,
  //           icon: '❌',
  //         }
  //       );
  //     }
  //   } catch (error: any) {
  //     const errorMessage = error?.message || 'Failed to send OTP';

  //     toast.error(errorMessage, {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //   }
  // };

  // const handleOtpChange = (value: string, index: number) => {
  //   // Only allow digits
  //   if (!/^\d*$/.test(value)) return;

  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);

  //   if (value && index < 5) {
  //     inputRefs.current[index + 1]?.focus();
  //   }
  // };

  // const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
  //   if (e.key === 'Backspace') {
  //     if (!otp[index] && index > 0) {
  //       const newOtp = [...otp];
  //       newOtp[index - 1] = '';
  //       setOtp(newOtp);
  //       inputRefs.current[index - 1]?.focus();
  //     } else if (otp[index]) {
  //       // Clear current input
  //       const newOtp = [...otp];
  //       newOtp[index] = '';
  //       setOtp(newOtp);
  //     }
  //   }
  // };

  // const handleVerifyOTP = async () => {
  //   const otpCode = otp.join('');

  //   if (otpCode.length !== 6) {
  //     toast.error('Please enter the complete 6-digit OTP code', {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //     return;
  //   }

  //   try {
  //     const result = await verifyOtp({
  //       email: userEmail,
  //       otp: otpCode,
  //     }).unwrap();

  //     if (result?.statusCode === 200) {
  //       const access_token = result?.data?.access_token;

  //       const admin_info = result?.data?.admin_info;

  //       if (access_token && admin_info) {
  //         const loginResponse: ILoginResponse = {
  //           access_token,
  //           admin_info,
  //           token_type: 'Bearer',
  //           expires_in: 3600,
  //         };

  //         // Store authentication data
  //         await storeToken(access_token);
  //         storeAdminInfo(admin_info);

  //         // Update Redux state
  //         dispatch(setCredentials(loginResponse));

  //         toast.success('OTP verified successfully!', {
  //           position: 'bottom-right',
  //           duration: 1500,
  //           icon: '✅',
  //         });

  //         // Clear OTP state and close modal
  //         setOtp(['', '', '', '', '', '']);
  //         setShowOtpModal(false);
  //         setUserEmail('');
  //         reset();
  //         router.push('/dashboard');
  //       } else {
  //         toast.error('Missing authentication data in response', {
  //           position: 'bottom-right',
  //           duration: 1500,
  //           icon: '❌',
  //         });
  //       }
  //     } else {
  //       toast.error(
  //         result?.message || 'OTP verification failed. Please try again.',
  //         {
  //           position: 'bottom-right',
  //           duration: 1500,
  //           icon: '❌',
  //         }
  //       );
  //     }
  //   } catch (error: any) {
  //     const errorMessage = error?.message || 'Invalid OTP code';

  //     toast.error(errorMessage, {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //   }
  // };

  // const handleBackToLogin = () => {
  //   setShowOtpModal(false);
  //   setUserEmail('');
  //   setOtp(['', '', '', '', '', '']);
  //   reset();
  // };

  // const handleResendOTP = async () => {
  //   try {
  //     const response = await login({ email: userEmail }).unwrap();

  //     if (response.statusCode === 200) {
  //       toast.success('OTP code resent to your email', {
  //         position: 'bottom-right',
  //         duration: 1500,
  //         icon: '✅',
  //       });
  //       setOtp(['', '', '', '', '', '']);
  //     }
  //   } catch (error: any) {
  //     toast.error(error?.message || 'Failed to resend OTP', {
  //       position: 'bottom-right',
  //       duration: 1500,
  //       icon: '❌',
  //     });
  //   }
  // };

  // DEMO CREDENTIALS

  // Handle email submit
  const handleEmailSubmit = (e: React.FormEvent) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    setEmailError('');
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }
    if (email) {
      setUserEmail(email);
      setShowOtpModal(true);
    }
  };
  // Handle OTP change
  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle OTP verification
  const handleVerifyOTP = async () => {
    setIsVerifyLoading(true);
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setIsVerifyLoading(false);
      setEmailError('Please enter the complete 6-digit OTP code');
      return;
    }
    const access_token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';
    const admin_info = {
      id: '1234567890',
      admin_id: 1,
      name: 'Babul Akter',
      username: 'babulakter',
      email: 'customer@sarafcard.com',
      role: 'customer',
      permissions: ['dashboard.access', 'reports.view'],
    };

    // Store authentication data
    await storeToken(access_token);
    storeAdminInfo(admin_info);
    setTimeout(() => {
      setIsVerifyLoading(false);
      reset();
      setShowOtpModal(false);
      setUserEmail('');
      // Redirect to dashboard
      router.push('/dashboard');
    }, 800);
  };

  // Handle back to login
  const handleBackToLogin = () => {
    setShowOtpModal(false);
    setUserEmail('');
    setOtp(['', '', '', '', '', '']);
    reset();
  };

  return (
    <div className="main-container relative overflow-hidden">
      <div className="relative z-20 flex-1 flex justify-center items-center px-4">
        <div className="glass-premium rounded-2xl p-8 w-full max-w-md relative shadow-md dark:shadow-none">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-normal dark:text-white text-gray-900 drop-shadow-lg mb-2">
              Customer Portal
            </h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-gray-700 drop-shadow-sm">
              Enter your email to receive an OTP code
            </p>
          </div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            {/* Black-Matte Frame with Nano Stars Border */}

            {/* Inner Content Container */}

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-400/10 to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* Premium Tab Navigation */}
              <div
                className="flex bg-black/95 backdrop-blur-xl border border-gray-700/80 rounded-xl p-1 mb-8 shadow-2xl"
                style={{
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.05), 0 25px 50px -12px rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                }}
              >
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-4 px-6 text-center rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                    activeTab === 'login'
                      ? 'bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-600/90 text-white shadow-xl border border-gray-500/30 backdrop-blur-xl'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={
                    activeTab === 'login'
                      ? {
                          boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.1), 0 15px 30px -8px rgba(0,0,0,0.4)',
                          backdropFilter: 'blur(20px) saturate(180%)',
                        }
                      : {}
                  }
                >
                  {activeTab === 'login' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  <span className="relative z-10">Login</span>
                </button>
                <button
                  onClick={() => setActiveTab('redeem')}
                  className={`flex-1 py-4 px-6 text-center rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group ${
                    activeTab === 'redeem'
                      ? 'bg-gradient-to-br from-gray-800/90 via-gray-700/80 to-gray-600/90 text-white shadow-xl border border-gray-500/30 backdrop-blur-xl'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={
                    activeTab === 'redeem'
                      ? {
                          boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.1), 0 15px 30px -8px rgba(0,0,0,0.4)',
                          backdropFilter: 'blur(20px) saturate(180%)',
                        }
                      : {}
                  }
                >
                  {activeTab === 'redeem' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  <span className="relative z-10">Redeem</span>
                </button>
              </div>

              {/* Tab Content with Animation */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {activeTab === 'login' ? (
                  <LoginTab
                    emailValue={email}
                    setEmail={setEmail}
                    emailError={emailError}
                    isLoginLoading={isLoginLoading}
                    handleEmailSubmit={handleEmailSubmit}
                  />
                ) : (
                  <RegisterTab />
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground/70 dark:text-muted-foreground/70 text-gray-500 text-sm drop-shadow-sm">
              Secure customer access for SarafCard platform
            </p>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-premium rounded-2xl p-8 w-full max-w-md relative shadow-md dark:shadow-none">
            {/* Close Button */}
            <button
              onClick={handleBackToLogin}
              className="absolute top-4 right-4 text-muted-foreground dark:text-muted-foreground text-gray-600 hover:text-foreground dark:hover:text-foreground hover:text-gray-900 transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl dark:text-white text-gray-900 drop-shadow-lg mb-2">
                Verify OTP
              </h1>
              <p className="text-muted-foreground dark:text-muted-foreground text-gray-700 drop-shadow-sm">
                Enter the 6-digit demo code
              </p>
              <p className="text-sm text-primary dark:text-primary text-gray-800 mt-2 font-medium">
                {userEmail}
              </p>
            </div>

            {/* OTP Input */}
            <div className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    className="w-12 h-12 text-center text-lg font-semibold rounded-lg border border-gray-200 bg-white/40 backdrop-blur-xl text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/20 focus-visible:ring-offset-2 focus-visible:bg-white/50 focus-visible:border-gray-400/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 shadow-sm dark:border-white/15 dark:bg-white/10 dark:focus-visible:ring-ring/30 dark:focus-visible:bg-white/15 dark:focus-visible:border-white/25"
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleVerifyOTP}
                  disabled={isVerifyLoading || otp.join('').length !== 6}
                  className="w-full flex justify-center items-center gap-3 py-3 px-6 relative overflow-hidden rounded-lg font-semibold transition-all duration-300 bg-slate-600 hover:bg-slate-700 text-white dark:bg-white/10 dark:border dark:border-white/20 dark:backdrop-blur-xl dark:hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="relative z-10 flex items-center gap-3">
                    <FiCheck className="w-5 h-5" />
                    <span>
                      {isVerifyLoading ? 'Verifying...' : 'Verify OTP'}
                    </span>
                  </div>
                </button>

                <button
                  // onClick={() => alert('Demo only: OTP is ' + DEMO_OTP)}
                  disabled={isLoginLoading}
                  className="w-full flex justify-center items-center gap-3 py-3 px-6 bg-transparent border border-gray-400 dark:border-white/20 rounded-lg text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <FiSend className="w-4 h-4" />
                  <span>{isLoginLoading ? 'Sending...' : 'Resend OTP'}</span>
                </button>

                <button
                  onClick={handleBackToLogin}
                  className="w-full flex justify-center items-center gap-3 py-3 px-6 bg-transparent border border-gray-400 dark:border-white/20 rounded-lg text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <FiArrowLeft className="w-4 h-4" />
                  <span>Back to Login</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground/70 dark:text-muted-foreground/70 text-gray-500 text-sm drop-shadow-sm">
                {/* Demo OTP: {DEMO_OTP} */}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

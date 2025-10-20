import { GlassInput } from '@/components/ui/input';
import React from 'react';
import { FiMail, FiSend } from 'react-icons/fi';

interface LoginTabProps {
  emailValue: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailError: string;
  isLoginLoading: boolean;
  handleEmailSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function LoginTab({
  emailValue,
  setEmail,
  emailError,
  isLoginLoading,
  handleEmailSubmit,
}: LoginTabProps) {
  return (
    <div>
      <form className="space-y-6" onSubmit={handleEmailSubmit}>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground/90 dark:text-foreground/90 text-gray-800"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              <FiMail className="w-5 h-5" />
            </div>
            <GlassInput
              type="email"
              id="email"
              className="pl-12"
              placeholder={'customer@sarafcard.com'}
              value={emailValue}
              onChange={(ev) => setEmail((ev.target as HTMLInputElement).value)}
              autoComplete="off"
            />
          </div>
          {emailError && (
            <span className="text-destructive text-xs mt-1 drop-shadow-sm">
              {emailError}
            </span>
          )}
        </div>

        <button type="submit" disabled={isLoginLoading} className="btn-primary">
          <div className="relative z-10 flex items-center gap-3">
            <FiSend className="w-5 h-5" />
            <span>{isLoginLoading ? 'Sending...' : 'Send OTP Code'}</span>
          </div>
        </button>
      </form>
    </div>
  );
}

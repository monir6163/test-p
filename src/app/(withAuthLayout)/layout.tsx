import ThemeToggle from '@/components/theme/Themetoggle';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="main-container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars with local movements */}
        <div
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            top: '20%',
            left: '10%',
            animation: 'starTwinkle 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
          style={{
            top: '30%',
            right: '15%',
            animation: 'starDrift 4s ease-in-out infinite 0.5s',
          }}
        />
        <div
          className="absolute w-1 h-1 bg-white/70 rounded-full"
          style={{
            top: '60%',
            left: '20%',
            animation: 'starFloat 5s ease-in-out infinite 1s',
          }}
        />

        {/* Stars moving across the entire page */}
        {/* Bottom Left to Top Right */}
        <div
          className="absolute w-1 h-1 bg-white/50 rounded-full"
          style={{
            bottom: '10%',
            left: '0%',
            animation: 'starMoveBottomLeftToTopRight 12s linear infinite',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
          style={{
            bottom: '0%',
            left: '0%',
            animation: 'starMoveBottomLeftToTopRight 15s linear infinite 3s',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white/45 rounded-full"
          style={{
            bottom: '20%',
            left: '0%',
            animation: 'starMoveBottomLeftToTopRight 18s linear infinite 6s',
          }}
        />

        {/* Top Right to Bottom Left */}
        <div
          className="absolute w-1 h-1 bg-white/55 rounded-full"
          style={{
            top: '0%',
            right: '0%',
            animation: 'starMoveTopRightToBottomLeft 14s linear infinite 2s',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/35 rounded-full"
          style={{
            top: '10%',
            right: '0%',
            animation: 'starMoveTopRightToBottomLeft 16s linear infinite 7s',
          }}
        />

        {/* Left to Right */}
        <div
          className="absolute w-1 h-1 bg-white/60 rounded-full"
          style={{
            top: '25%',
            left: '0%',
            animation: 'starMoveLeftToRight 10s linear infinite',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
          style={{
            top: '45%',
            left: '0%',
            animation: 'starMoveLeftToRight 13s linear infinite 4s',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white/50 rounded-full"
          style={{
            top: '65%',
            left: '0%',
            animation: 'starMoveLeftToRight 11s linear infinite 8s',
          }}
        />

        {/* Right to Left */}
        <div
          className="absolute w-1 h-1 bg-white/45 rounded-full"
          style={{
            top: '35%',
            right: '0%',
            animation: 'starMoveRightToLeft 12s linear infinite 1s',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/38 rounded-full"
          style={{
            top: '55%',
            right: '0%',
            animation: 'starMoveRightToLeft 14s linear infinite 5s',
          }}
        />

        {/* Top to Bottom */}
        <div
          className="absolute w-1 h-1 bg-white/52 rounded-full"
          style={{
            top: '0%',
            left: '30%',
            animation: 'starMoveTopToBottom 9s linear infinite',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/42 rounded-full"
          style={{
            top: '0%',
            left: '60%',
            animation: 'starMoveTopToBottom 11s linear infinite 3s',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white/48 rounded-full"
          style={{
            top: '0%',
            left: '80%',
            animation: 'starMoveTopToBottom 13s linear infinite 6s',
          }}
        />

        {/* Bottom to Top */}
        <div
          className="absolute w-1 h-1 bg-white/46 rounded-full"
          style={{
            bottom: '0%',
            left: '40%',
            animation: 'starMoveBottomToTop 10s linear infinite 2s',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/36 rounded-full"
          style={{
            bottom: '0%',
            left: '70%',
            animation: 'starMoveBottomToTop 12s linear infinite 7s',
          }}
        />

        {/* Top Left to Bottom Right */}
        <div
          className="absolute w-1 h-1 bg-white/44 rounded-full"
          style={{
            top: '0%',
            left: '0%',
            animation: 'starMoveTopLeftToBottomRight 16s linear infinite',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/32 rounded-full"
          style={{
            top: '0%',
            left: '0%',
            animation: 'starMoveTopLeftToBottomRight 20s linear infinite 8s',
          }}
        />

        {/* Bottom Right to Top Left */}
        <div
          className="absolute w-1.5 h-1.5 bg-white/54 rounded-full"
          style={{
            bottom: '0%',
            right: '0%',
            animation: 'starMoveBottomRightToTopLeft 17s linear infinite 4s',
          }}
        />

        {/* Static twinkling stars for atmosphere */}
        <div
          className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
          style={{
            top: '15%',
            left: '25%',
            animation: 'starTwinkle 2.5s ease-in-out infinite 1s',
          }}
        />
        <div
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            top: '75%',
            right: '30%',
            animation: 'starFloat 4s ease-in-out infinite 2s',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/35 rounded-full"
          style={{
            top: '85%',
            left: '15%',
            animation: 'starTwinkle 3.5s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-1 h-1 bg-white/42 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            animation: 'starDrift 6s ease-in-out infinite 1.5s',
          }}
        />
        <div
          className="absolute w-0.5 h-0.5 bg-white/28 rounded-full"
          style={{
            top: '8%',
            right: '20%',
            animation: 'starFloat 3.2s ease-in-out infinite 2.8s',
          }}
        />
        <div
          className="absolute w-1.5 h-1.5 bg-white/46 rounded-full"
          style={{
            top: '90%',
            left: '85%',
            animation: 'starTwinkle 4.8s ease-in-out infinite 0.5s',
          }}
        />
      </div>
      <div className="flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Image
            src="/assets/images/admin/sarafcard-logo.png"
            alt="SarafCard Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="lg:-mt-12">
          <ThemeToggle />
        </div>
      </div>
      {children}
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import errorImage from '../../public/assets/images/error.jpg';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="h-screen flex flex-col justify-center items-center">
          <Image
            src={errorImage}
            alt="Error"
            className="object-cover size-80"
          />
          <h2 className="text-primary font-semibold">
            Error ! Something went wrong !!
          </h2>
          <p className="text-sm text-center mt-4 w-full sm:w-[475px] text-dim">
            {error.message}
          </p>
          <div className="mt-4 flex justify-center items-center gap-x-2">
            <button
              className="btn-secondary flex items-center gap-x-2"
              onClick={reset}
            >
              Try Again
            </button>
            <Link href="/">
              <button className="btn-secondary flex items-center gap-x-2">
                Back to Home <FaArrowRightLong />
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

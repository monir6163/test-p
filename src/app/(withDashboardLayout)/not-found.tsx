import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import notFoundImg from '../../../public/assets/images/404.png';

const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center py-8">
      <div>
        <Image
          src={notFoundImg}
          alt="Not Found"
          className="object-cover size-60 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          404 - Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-center w-2/3 m-auto">
          Something went wrong. It looks like the requested page could not be
          found. The link might be broken or the page has been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <button className="btn-primary w-2/3 mx-auto lg:w-full sm:w-auto">
              Back to Dashboard <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

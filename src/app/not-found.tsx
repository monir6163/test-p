import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import notFoundImg from '../../public/assets/images/404.png';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Image
        src={notFoundImg}
        alt="Not Found"
        className="object-cover size-80"
      />
      <h2 className="text-primary font-semibold"> 404 ! Page Not Found !!</h2>
      <p className="text-sm text-center mt-4 w-full sm:w-[475px] text-dim">
        Something went wrong. It’s look that your requested page could not be
        found. The link is broken or the page is removed.
      </p>
      <div className="mt-4">
        <Link href="/">
          <button className="btn-primary">
            Back to Home <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

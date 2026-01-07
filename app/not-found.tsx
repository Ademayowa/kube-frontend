import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#F2F7FB] text-center px-4'>
      <h1 className='text-6xl font-bold text-[#EA5566]'>404</h1>
      <h2 className='text-2xl text-[#707071] mt-4'>Page Not Found</h2>
      <p className='text-[#707071] mt-2'>
        The page you are looking for does not exist.
      </p>
      <Link
        href='/'
        className='mt-6 rounded-md bg-[#EA5566] px-5 py-4 text-white shadow-md hover:bg-red-600'
      >
        Go Back Home
      </Link>
    </div>
  );
}

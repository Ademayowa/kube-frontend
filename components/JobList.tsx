import Link from 'next/link';
import { Job } from '@/types';
import { MapPin } from 'lucide-react';

type JobListProps = {
  jobs: Job[];
};

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-4'>
      {jobs?.map((job) => (
        <Link
          key={job.id}
          href={`/job/${job.id}`}
          className='block rounded-2xl bg-white border border-gray-300 p-7 cardAnimation'
        >
          <div className='flex items-center'>
            <h2 className='flex flex-1 text-[#0F4A7B] text-lg lg:text-xl font-bold capitalize'>
              {job.title}
            </h2>
          </div>

          <div className='flex flex-col gap-2 space-y-1'>
            <div className='mt-2 flex items-center space-x-1'>
              <MapPin className='h-5 w-5 text-[#62BECB] -ml-1' />
              <p className='text-[#707071]'>{job.location}</p>
            </div>

            <p className='text-[#0F4A7B]'>${job.salary}</p>
          </div>

          <p className='text-[#707071] mt-5 !w-full md:w-4/5 leading-8 line-clamp-3'>
            {job.description}
          </p>
          <div className='flex mt-3'>
            <button className='rounded-md bg-[#EA5566] px-5 py-3 text-white shadow-md hover:bg-red-500'>
              view job
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

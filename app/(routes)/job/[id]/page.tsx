import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fetchJob } from '@/lib/fetchJob';
import { MapPin, DollarSign, ChevronLeft, Share2 } from 'lucide-react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { Button } from '@/components/ui/button';
import ShareButton from '@/components/ShareButton';

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60;

// Generate metadata for job title dynamically
export async function generateMetadata({ params }: Props) {
  const { id } = params;
  const job = await fetchJob(id);

  if (job) {
    return {
      title: `${job.title}`,
    };
  }
}

export default async function JobPage({ params }: Props) {
  const { id } = params;
  const job = await fetchJob(id);

  if (!job) {
    notFound();
  }

  return (
    <section className='bg-[#F2F7FB]'>
      <BaseLayout>
        <div className='py-10 pb-10'>
          <div className='bg-white rounded-2xl border border-gray-300 w-full lg:w-10/12 mx-auto animation'>
            <div className='lg:px-10 px-6'>
              <Button variant='ghost' asChild>
                <Link
                  href='/'
                  className='text-[#707071] mt-7 !text-sm -ml-1 hover:text-[#0F4A7B] underline'
                >
                  <ChevronLeft /> Back to jobs
                </Link>
              </Button>
            </div>

            <div className='lg:px-10 px-6 pb-14'>
              <div>
                <div className='flex items-center'>
                  <h2 className='text-[#0F4A7B] text-2xl font-bold ml-1 capitalize mt-2'>
                    {job.title}
                  </h2>

                  {/* Share job button */}
                  <div className='flex justify-end flex-1'>
                    <ShareButton jobId={job.id} />
                  </div>
                </div>

                <div className='flex items-center pt-4 pb-3'>
                  <MapPin className='w-5 h-5 text-[#62BECB] mr-1' />
                  <p className='text-[#707071] mr-3'>{job.location}</p>
                  <DollarSign className='w-5 h-5 text-[#62BECB]' />
                  <p className='text-[#707071]'>{job.salary}k</p>
                </div>
              </div>
              <hr className='border-b border-red-200' />

              <div className='mt-7'>
                <h3 className='font-bold my-5 text-lg text-[#707071]'>
                  Summary
                </h3>
                <p className='max-w-3xl text-[#707071] leading-loose'>
                  {job.description}
                </p>

                <div className='max-w-3xl text-[#707071] leading-loose'>
                  <h3 className='font-bold text-lg mt-10 mb-5'>
                    Responsibilities
                  </h3>
                  {job.duties.map((duty, index) => (
                    <ul
                      key={index}
                      className='flex items-center pl-4 list-disc'
                    >
                      <li>{duty}</li>
                    </ul>
                  ))}
                </div>

                <Button
                  asChild
                  className='mt-5 bg-[#EA5566] text-white shadow-md hover:bg-red-500'
                >
                  <Link target='_blank' href={`${job.url}`}>
                    Apply for this position
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </section>
  );
}

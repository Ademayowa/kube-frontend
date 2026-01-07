import Hero from '@/components/Hero';
import Jobs from '@/components/Jobs';
import BaseLayout from '@/components/layouts/BaseLayout';
import JobFilter from '@/components/JobFilter';
import Message from '@/components/Message';
import fetchJobs from '@/lib/fetchJobs';
import Pagination from '@/components/Pagination';

type SearchProps = {
  searchParams: {
    query?: string;
    page?: string;
    sort?: string;
  };
};

export const revalidate = 60; // Revalidate the entire page every 60secs

export default async function HomePage({ searchParams }: SearchProps) {
  const data = await fetchJobs(searchParams);

  if (!data) {
    // Handle API failure from the backend if the server is down
    return (
      <>
        <Hero />
        <Message
          className='py-16 flex justify-center'
          message='Service is temporarily down, please try again later'
        />
      </>
    );
  }

  const { data: jobs, metadata } = data;

  const sortFilter = searchParams.sort || '';
  const searchQuery = searchParams.query || '';

  return (
    <main>
      <Hero />

      <BaseLayout className='px-5'>
        {jobs?.length > 0 ? (
          <div className='py-20'>
            <div className='flex items-center py-2'>
              <p className='lg:text-lg text-[#707071] border bg-white px-4 py-2 rounded-md'>
                Jobs
                <span className='border border-[#62BECB] rounded px-2 ml-3'>
                  {metadata?.total}
                </span>
              </p>

              <div className='flex justify-end flex-1'>
                <JobFilter />
              </div>
            </div>

            <Jobs
              initialJobs={jobs}
              filter={sortFilter}
              searchQuery={searchQuery}
            />

            {/* <Pagination
              currentPage={metadata?.current_page}
              totalPages={metadata?.total_pages}
            /> */}
          </div>
        ) : (
          // Response for an unmatch job search to a user
          <Message className='py-16 text-center' message='No jobs found' />
        )}
      </BaseLayout>
    </main>
  );
}

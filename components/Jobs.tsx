'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import JobList from './JobList';
import Message from './Message';
import Loading from './Loading';

type JobsProps = {
  initialJobs: any[];
  filter: string;
  searchQuery: string;
};

export default function Jobs({ initialJobs }: JobsProps) {
  const [jobs, setJobs] = useState<any[]>(initialJobs);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('query') || '';
  const sortFilter = searchParams.get('sort') || '';

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.set('query', searchQuery);
        if (sortFilter) params.set('sort', sortFilter);

        // Add timestamp to bust cache
        params.set('_t', Date.now().toString());

        const response = await fetch(`/api/jobs?${params.toString()}`, {
          cache: 'no-store', // Add this - prevents browser caching
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate', // Add this
            Pragma: 'no-cache', // Add this for older browsers
          },
        });

        const data = await response.json();
        setJobs(Array.isArray(data) ? data : data?.data || []);
      } catch (error) {
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredJobs();
  }, [searchQuery, sortFilter]);

  console.log(jobs);

  return (
    <>
      {loading ? (
        <Loading />
      ) : jobs.length > 0 ? (
        <JobList jobs={jobs} />
      ) : (
        <Message className='text-center' message='No jobs found' />
      )}
    </>
  );
}

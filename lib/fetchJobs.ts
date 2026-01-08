import { PaginationApiResponse } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export default async function fetchJobs(searchParams: {
  query?: string;
  page?: string;
  sort?: string;
}): Promise<PaginationApiResponse | null> {
  const query = new URLSearchParams({
    ...searchParams,
    limit: '10',
  }).toString();

  const url = `${API_URL}/jobs?${query}`;
  console.log('Fetching from:', url);

  try {
    const res = await fetch(url, {
      cache: 'no-store',
    });

    console.log('Response status:', res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.log('Error response:', errorText);
      throw new Error('Failed to fetch jobs');
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return null;
  }
}

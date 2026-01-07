import { Job } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

// Fetch single job
export async function fetchJob(id: string): Promise<Job | null> {
  try {
    const response = await fetch(`${API_URL}/jobs/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data, don't use cache
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching job', error);
    return null;
  }
}

'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());

    router.push(`/?${params.toString()}`);

    // Smoothly scroll to the job list card after clicking the pagination button
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='pagination py-16 flex items-center justify-center space-x-4'>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className='px-4 py-2 border bg-[#0F4A7B] text-white rounded-md disabled:opacity-50'
      >
        Previous
      </button>
      <span className='px-4'>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className='px-4 py-2 bg-[#0F4A7B] text-white rounded-md disabled:opacity-50'
      >
        Next
      </button>
    </div>
  );
}

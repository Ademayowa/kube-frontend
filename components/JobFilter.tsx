'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function JobFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get('sort') || '';

  const handleSortChange = (newSort: string) => {
    // Preserve the existing query search in the form when a dropdown is selected
    const params = new URLSearchParams(window.location.search);

    // Remove the sort parameter from the URL when 'Most relevant' dropdown is selected
    if (newSort === 'most-relevant') {
      params.delete('sort');
    } else if (newSort) {
      // Set the sort parameter for other dropdown options
      params.set('sort', newSort);
    }

    router.push(`/?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Select onValueChange={handleSortChange} value={currentSort}>
      <SelectTrigger className='w-[180px] lg:text-lg text-[#707071]'>
        <SelectValue placeholder='Sort By' />
      </SelectTrigger>

      <SelectContent className='text-[#707071]'>
        <SelectItem value='most-relevant'>Most relevant</SelectItem>
        <SelectItem value='highest-salary'>Highest salary</SelectItem>
        <SelectItem value='recent'>Most recent</SelectItem>
      </SelectContent>
    </Select>
  );
}

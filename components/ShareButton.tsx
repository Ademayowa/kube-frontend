'use client';

import { useState } from 'react';
import { Share2 } from 'lucide-react';

type ShareButtonProps = {
  jobId: string;
};

export default function ShareButton({ jobId }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShareClick = async () => {
    try {
      // Construct the shareable URL directly
      const shareableLink = `${window.location.origin}/job/${jobId}`;

      // Copy to clipboard
      await navigator.clipboard.writeText(shareableLink);

      setCopied(true);

      setTimeout(() => setCopied(false), 8000);
    } catch (error) {
      console.error('Error sharing job:', error);
    }
  };

  return (
    <div className='relative'>
      <button
        onClick={handleShareClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className='rounded-full border border-[#62BECB] p-2'
      >
        <Share2 className='text-[#62BECB]' />
      </button>

      {showTooltip && (
        <div className='absolute -bottom-12 right-0'>
          <div className='relative'>
            {/* Triangle/arrow shape */}
            <div className='absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#2D3748]'></div>
            {/* Main tooltip */}
            <div className='bg-[#2D3748] text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg'>
              Share job
            </div>
          </div>
        </div>
      )}

      {copied && (
        <div className='absolute -top-12 right-0 bg-pink-100 text-[#0F4A7B] text-xs p-2 rounded whitespace-nowrap font-bold'>
          Link copied
        </div>
      )}
    </div>
  );
}

/* This component handles the messages displayed on the homepage.
  Response message for the API backend service if it is down 
*/
import clsx from 'clsx';

type MessageProps = {
  message: string;
  className?: string;
};

export default function Message({ message, className }: MessageProps) {
  return (
    <div className={clsx(className)}>
      <p className='text-lg text-[#707071]'>{message}</p>
    </div>
  );
}

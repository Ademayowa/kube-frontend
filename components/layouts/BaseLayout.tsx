/* Layout for all components in the components folder */
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function BaseLayout({ children, className }: Props) {
  return <div className={clsx('max-w-6xl mx-auto', className)}>{children}</div>;
}

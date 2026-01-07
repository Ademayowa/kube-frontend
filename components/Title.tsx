type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <>
      <h2 className='text-[#0F4A7B] text-2xl lg:text-3xl font-bold'>{title}</h2>
    </>
  );
}

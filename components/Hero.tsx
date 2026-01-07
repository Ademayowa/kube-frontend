import SearchForm from '@/components/SearchForm';
import BaseLayout from '@/components/layouts/BaseLayout';

export default function Hero() {
  return (
    <section className='bg-[#0F4A7B] pt-10 py-24'>
      <BaseLayout className='px-5'>
        <div className='mt-10 flex flex-col items-center justify-center'>
          <div>
            <h1 className='text-3xl font-bold capitalize md:text-[64px] md:leading-tight text-white heroAnimation'>
              The easiest way to get your golang & devOps dream jobs.
            </h1>

            <p className='my-5 text-lg font-light !leading-normal text-white md:text-2xl w-11/12 animation'>
              Check the latest Go, SRE, and DevOps jobs with ease from companies
              hiring now.
            </p>
          </div>
        </div>

        <SearchForm />
      </BaseLayout>
    </section>
  );
}

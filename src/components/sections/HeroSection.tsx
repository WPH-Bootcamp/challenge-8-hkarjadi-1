import HeroLight from '../../assets/HeroLight.png';
import HeroDark from '../../assets/HeroDark.png';
import Button from '../ui/Button';

function HeroSection() {
  return (
    <div
      id='HeroSection'
      className='w-full mx-auto flex flex-col mt-16 px-4 py-10 gap-11 md:flex-row md:mt-0 md:p-35 md:items-center'
    >
      <div id='hero-content' className='flex flex-col gap-10 w-full'>
        <div id='hero-text' className='flex flex-col gap-2'>
          <h1 className='text-neutral-950 dark:text-neutral-25 text-4xl font-bold tracking-[-2%] md:text-7xl'>
            Your Tech Partner for{' '}
            <span className='text-primary-500'>Smarter Growth</span>
          </h1>
          <p className='text-neutral-950 dark:text-neutral-25  text-base font-semibold md:text-xl leading-7.5 md:leading-8.5 '>
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
        </div>
        <Button size='md'>Let's Talk</Button>
      </div>
      <div className='-ml-2 -mt-2  lg:-mr-35 lg:-mt-20'>
        <img
          className='w-full block dark:hidden'
          src={HeroLight}
          alt='Hero images'
        />
        <img
          className='w-full hidden dark:block'
          src={HeroDark}
          alt='Hero images'
        />
      </div>
    </div>
  );
}

export default HeroSection;

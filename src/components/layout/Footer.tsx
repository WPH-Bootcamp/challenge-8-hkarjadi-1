import CompanyLogo from '../../assets/CompanyLogo.png';
import { navItems } from '../../data/navigation';
import SocialMedia from '../../assets/SocialMedia.svg';
import SocialMediadark from '../../assets/SocialMediadark.svg';

function Footer() {
  return (
    <div id='Footer' className='px-4 py-6 xl:py-10 xl:px-35'>
      <div className='mb-6 md:mb-10 flex flex-col md:flex-row-reverse justify-between'>
        <div>
          {/* *** Company logo *** */}
          <div className='flex items-center'>
            <div className='flex items-center justify-center gap-2'>
              <div>
                <img
                  src={CompanyLogo}
                  alt='Logo'
                  className='w-6.5 h-7 md:w-7.5 md:h-8'
                />
              </div>
              <div className='font-outfit font-semibold text-xl md:text-2xl  leading-8 md:leading-9'>
                Your Logo
              </div>
            </div>
          </div>
        </div>
        <h1 className='font-bold tracking-[-2%] text-[28px] md:text-4xl leading-9.5 md:leading-11 max-w-70 w-full text-neutral-950 dark:text-neutral-25'>
          LET'S DISCUSS YOUR IDEAS
        </h1>
      </div>
      <hr className='text-neutral-800' />
      <div className='mt-6 md:mt-10 flex flex-col md:flex-row justify-between gap-6'>
        {/* *** menu list *** */}
        <div className='flex flex-col md:flex-row text-sm md:text-base leading-7 md:leading-7.5 font-medium gap-4 md:gap-8 text-neutral-950 dark:text-neutral-25'>
          {navItems.map((item) => (
            <a href={item.href} className='px-4 py-2'>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <img
            src={SocialMedia}
            alt='Social Media image'
            className='block dark:hidden'
          />
          <img
            src={SocialMediadark}
            alt='Social Media image'
            className='hidden dark:block'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

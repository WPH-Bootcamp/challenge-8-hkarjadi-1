import { ourprocessItem } from '../../data/ourprocess';
import ChevronUp from '../../assets/chevron-up.png';
import ChevronUpDark from '../../assets/chevron-up-dark.png';

function OurProcessSection() {
  return (
    <div className='relative'>
      {ourprocessItem.map((item, index) => (
        <div
          id='OurProcessSection'
          key={index}
          className='flex flex-col justify-between px-4 py-10 gap-6 xl:py-20 xl:px-35 md:gap-16'
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25 '>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400'>
              \{item.description}
            </p>
          </div>

          <div>
            {item.childitems?.map((child, childIndex) => (
              <div
                key={childIndex}
                className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-24 pl-13 md:pl-0 ${
                  childIndex % 2 === 1
                    ? 'md:flex-row-reverse md:*:first:col-start-2 md:*:last:col-start-1'
                    : 'md:mb-4'
                }`}
              >
                <div className='flex flex-col justify-center h-23.5 md:h-29 gap-1 p-4 md:p-6 border shrink-0 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border-neutral-975 dark:border-neutral-900'>
                  <div>
                    <div className='flex justify-between'>
                      <div className='text-neutral-950 dark:text-neutral-25 font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-2%] md:tracking-normal'>
                        {child.childtitle}
                      </div>
                      <div className='w-10 h-10 '>
                        <img
                          className='w-6 h-6 block dark:hidden '
                          src={ChevronUp}
                          alt='Chevron images'
                        />
                        <img
                          className='w-6 h-6 hidden dark:block '
                          src={ChevronUpDark}
                          alt='Chevron images'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='font-medium text-sm md:text-base leading-7 md:leading-7.5 text-neutral-500 dark:text-neutral-400'>
                    {child.childdesc}
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className='absolute top-49 md:top-60 left-4 lg:top-62 xl:top-69.25 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center justify-center gap-17.5 md:gap-22 text-white font-bold text-xs leading-6'>
        <p className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center text-xs leading-6'>
          1
        </p>
        <div className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center '>
          2
        </div>
        <p className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center text-xs leading-6'>
          3
        </p>
        <div className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center '>
          4
        </div>
        <p className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center text-xs leading-6'>
          5
        </p>
        <div className='w-10 h-10 bg-primary-200 rounded-full flex justify-center items-center '>
          6
        </div>
      </div>
    </div>
  );
}

export default OurProcessSection;

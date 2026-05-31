import { smartITItem } from '../../data/smartit';

function getImg(img: string) {
  return new URL(`../../assets/icons/${img}.svg`, import.meta.url).href;
}

function SmartITSection() {
  return (
    <div id='services'>
      {smartITItem.map((item, index) => (
        <div
          id='SmartITSection'
          key={index}
          className='flex flex-col justify-between px-4 py-10 gap-6 xl:py-20 xl:px-35 md:gap-16'
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25'>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400'>
              \{item.description}
            </p>
          </div>

          <div className='grid grid-cols-1 py-4 gap-10 md:grid-cols-3 md:gap-x-24'>
            {item.childitems?.map((child, childIndex) => (
              <div
                key={childIndex}
                className='flex flex-col justify-center px-5 pb-5 pt-12 md:pt-16 border rounded-2xl bg-neutral-50  dark:bg-neutral-950 border-neutral-975 dark:border-neutral-900 relative'
              >
                <img
                  src={getImg(child.childimg ?? '')}
                  alt='imgIcon'
                  className='absolute w-16 h-16 -top-7 md:-top-8'
                />
                <div className='flex flex-col justify-center'>
                  <h3 className='font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-2%] md:tracking-normal text-neutral-950 dark:text-neutral-25'>
                    {child.childtitle}
                  </h3>
                  <p className='font-medium text-sm md:text-base leading-7 md:leading-7.5 text-neutral-500 dark:text-neutral-400'>
                    {child.childdesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SmartITSection;

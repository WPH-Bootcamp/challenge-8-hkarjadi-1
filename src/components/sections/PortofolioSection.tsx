import { portofolioItem } from '../../data/portofolio';

function getImg(img: string) {
  return new URL(`../../assets/${img}.png`, import.meta.url).href;
}

function PortofolioSection() {
  return (
    <div id='projects'>
      {portofolioItem.map((item, index) => (
        <div
          key={index}
          className='flex flex-col justify-center px-4 py-10 gap-6 xl:py-20 xl:px-35 md:gap-3'
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25'>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400'>
              \{item.description}
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-2'>
            {item.childitems?.map((child, childIndex) => (
              <div
                key={childIndex}
                className='flex flex-col justify-center gap-3'
              >
                <img
                  src={getImg(child.childimg ?? '')}
                  alt='imgIcon'
                  className=''
                />
                <div className='flex flex-col justify-center'>
                  <h3 className='text-sm leading-7 font-medium text-primary-200 md:text-base md:font-bold'>
                    {child.childdesc}
                  </h3>
                  <p className='text-base leading-7.5 font-bold tracking-[-2%] text-neutral-950 dark:text-neutral-25'>
                    {child.childtitle}
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

export default PortofolioSection;

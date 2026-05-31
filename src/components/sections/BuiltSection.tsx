import { builtItem } from '../../data/built';

function getImg(img: string) {
  return new URL(`../../assets/${img}.png`, import.meta.url).href;
}

function BuiltSection() {
  return (
    <div id='BuiltIndustrySection'>
      {builtItem.map((item, index) => (
        <div
          key={index}
          className='flex flex-col justify-between px-4 py-10 gap-6 xl:py-20 xl:px-35 md:gap-16 '
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25'>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400 '>
              \{item.description}
            </p>
          </div>

          <div className='grid-cols-1 py-4 gap-6 md:grid-cols-2 md:flex  md:gap-16 '>
            <div>
              {item.childitems?.map((child, childIndex) => (
                <h3
                  className={`${
                    childIndex === 0
                      ? 'text-neutral-950 dark:text-neutral-25 border-primary-200'
                      : 'text-neutral-980 dark:text-neutral-600 border-neutral-600'
                  } font-bold text-base md:text-xl leading-7.5 md:leading-8.5 tracking-[-2%] md:tracking-normal border-l pl-2.5`}
                >
                  {child.childtitle}
                </h3>
              ))}
            </div>
            <div>
              {item.childitems?.map((child, childIndex) => (
                <div className='flex flex-col gap-5'>
                  <p
                    className={`${
                      childIndex === 0
                        ? 'text-sm leading-7 font-medium text-neutral-950 dark:text-neutral-25'
                        : 'hidden'
                    } `}
                  >
                    {child.childdesc}
                  </p>
                  <img
                    src={getImg(child.childimg ?? '')}
                    alt='imagebuiltsection'
                    className={`${
                      childIndex === 0
                        ? 'h-55.5 object-cover rounded-xl '
                        : 'hidden'
                    } `}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BuiltSection;

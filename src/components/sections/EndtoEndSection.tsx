import { endtoendItem } from '../../data/endtoend';

function EndtoEndSection() {
  return (
    <div id='about'>
      {endtoendItem.map((item, index) => (
        <div
          id='EndtoEndSection'
          key={index}
          className='flex flex-col justify-between px-4 py-20 gap-6 xl:px-35 md:gap-16'
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25 '>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400'>
              \{item.description}
            </p>
          </div>
          <div className='w-full grid grid-cols-2 place-items-center gap-4 px-4 md:grid-cols-4 md:gap-5 justify-center items-center'>
            {item.childitems?.map((child, childIndex) => (
              <div
                key={childIndex}
                className='flex flex-col justify-center md:h-40 xl:h-68.75 gap-1.5 px-4 text-center items-center rounded-full border shrink-0 aspect-square bg-neutral-50 dark:bg-neutral-950 border-neutral-975 dark:border-neutral-900'
              >
                <div
                  className='text-4xl leading-10 font-bold tracking-[-2%] md:text-5xl  md:leading-15 text-primary-200
'
                >
                  {child.childtitle}
                </div>
                <div className='text-sm leading-7 font-semiboldtext-neutral-25 md:text-xl md:leading-8.5 text-neutral-950 dark:text-neutral-25'>
                  {child.childdesc}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EndtoEndSection;

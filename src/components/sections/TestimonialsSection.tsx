import { testimonialItem } from '../../data/testimonials';

function getImg(img: string) {
  return new URL(`../../assets/${img}.png`, import.meta.url).href;
}

function Rating(rating: number) {
  return (
    <div
      id='testimonials'
      className='flex items-center justify-center space-x-1'
    >
      {[...Array(5)].map((_, i) => {
        const isFilled = i < Math.floor(rating);
        return (
          <svg
            key={i}
            className={`w-6 h-6 ${
              isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
            viewBox='0 0 24 24'
          >
            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
          </svg>
        );
      })}
    </div>
  );
}

function TestimonialSection() {
  return (
    <div>
      {testimonialItem.map((item, index) => (
        <div
          id='TestimonialSection'
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

          <div
            className={
              'flex overflow-x-auto space-x-6 pb-6 custom-scrollbar snap-x snap-mandatory scrollbar-thumb-primary-500 scrollbar-track-neutral-975 dark:scrollbar-track-neutral-900'
            }
          >
            {item.childitems?.map((child, childIndex) => (
              <div
                className='shrink-0 w-full md:w-148 snap-center flex justify-center'
                key={childIndex}
              >
                <div className='relative transition-transform duration-500 ease-in-out px-4 pt-4 pb-12 border md:w-148 bg-neutral-50   dark:bg-neutral-950 border-neutral-975 dark:border-neutral-900 '>
                  {Rating(child.childrating ?? 0)}
                  <p className='text-sm leading-7 font-semibold text-center md:text-base md:font-bold text-neutral-950 dark:text-neutral-25'>
                    {child.childdesc}
                  </p>
                  <h3 className='text-sm leading-7 font-medium text-center md:text-base md:font-bold text-neutral-950 dark:text-neutral-25'>
                    {child.childname}
                  </h3>
                  <h3 className='text-sm leading-7 font-medium text-primary-200 text-center md:text-base md:font-bold'>
                    {child.childposition}
                  </h3>
                  <img
                    src={getImg(child.childimg ?? '')}
                    alt='foto user'
                    className='absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full h-15'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialSection;

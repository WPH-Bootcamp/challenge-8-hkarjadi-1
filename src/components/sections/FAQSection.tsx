import { faqItem } from '../../data/faq';
import Consultation from '../../assets/Consultation.png';
import Button from '../ui/Button';

function FAQSection() {
  return (
    <div id='faq'>
      {faqItem.map((item, index) => (
        <div
          id='FAQSection'
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

          <div className='flex flex-col md:flex-row md:gap-18'>
            {/* <div className='grid grid-cols-1 md:grid-cols-2'> */}
            <div>
              {item.childitems?.map((child, childIndex) => (
                <div key={childIndex}>
                  <div className='border-t h-6 border-neutral-800 dark:border-neutral-400'></div>
                  <details className='group'>
                    <summary className='flex cursor-pointer items-center justify-between list-none [&::-webkit-details-marker]:hidden'>
                      <span className='text-lg leading-8 font-bold md:text-2xl md:leading-9 text-neutral-950 dark:text-neutral-25'>
                        {child.childquestion}
                      </span>
                      <span className='group-open:hidden text-lg leading-8 font-bold text-neutral-950 dark:text-neutral-25'>
                        +
                      </span>
                      <span className='hidden group-open:inline text-lg leading-8 font-bold text-neutral-950 dark:text-neutral-25'>
                        -
                      </span>
                    </summary>
                    <div className='open:text-sm leading-7 font-medium  md:text-xl md:leading-8.5 text-neutral-500 dark:text-neutral-400'>
                      {child.childanswer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            <div>
              <div className='flex flex-col justify-start items-center rounded-2xl bg-primary-300 w-full gap-4 md:gap-6 p-5 md:p-6'>
                <div>
                  <h2 className='text-[28px] leading-9.5 font-bold text-white tracking-[-2%] md:text-4xl md:leading-11'>
                    Let's talk it through
                  </h2>
                  <p className='text-sm leading-7 font-semibold text-white md:text-lg md:leading-8'>
                    book a free consultation with our team
                  </p>
                </div>
                <div>
                  <img src={Consultation} alt='imgIcon' />
                </div>
                <Button className='w-full' size='sm' variant='secondary'>
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQSection;

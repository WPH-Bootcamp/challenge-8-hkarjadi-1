import { contactItem } from '../../data/contact';
import { serviceItem } from '../../data/services';
import Button from '../ui/Button';

function ContactSection() {
  return (
    <div>
      {contactItem.map((item, index) => (
        <div
          id='ContactSection'
          key={index}
          className='flex flex-col justify-center px-4 py-10 gap-6 xl:py-20 xl:px-35 md:gap-16 items-center w-full'
        >
          <div className='sub-head'>
            <h2 className='sub-title text-neutral-950 dark:text-neutral-25'>
              {item.title}
            </h2>
            <p className='sub-desc text-neutral-500 dark:text-neutral-400'>
              \{item.description}
            </p>
          </div>

          <form action=' # ' className='w-full md:max-w-180'>
            <div className='flex flex-col gap-5 justify-center items-center '>
              {item.childitems?.map((child, childIndex) => (
                <div key={childIndex} className='w-full max-w-90 md:max-w-180'>
                  <label className='text-sm leading-7 font-bold text-neutral-950 dark:text-neutral-25'>
                    {child.childname}
                  </label>
                  {child.childname === 'Message' ? (
                    <textarea
                      id={child.childname}
                      placeholder={child.childdesc}
                      className='h-33 text-neutral-500 border rounded-xl py-2 px-4 w-full'
                    />
                  ) : (
                    <input
                      type='text'
                      id={child.childname}
                      placeholder={child.childdesc}
                      className='text-neutral-500 border rounded-xl py-2 px-4 w-full'
                    ></input>
                  )}
                  {child.childname === 'Message' ? (
                    <div className='grid md:grid-cols-2 '>
                      <label className='text-sm leading-7 font-bold text-neutral-950 dark:text-neutral-25'>
                        Service
                      </label>
                      <br />
                      {serviceItem.map((sitem) => (
                        <div>
                          <input
                            type='checkbox'
                            id='WebDev'
                            placeholder={sitem.title}
                            className=' border rounded-sm h-5 w-5 mr-3 accent-primary-200 '
                          ></input>
                          <label
                            htmlFor={sitem.title}
                            className='text-sm leading-7 font-medium cursor-pointer text-neutral-950 dark:text-neutral-25 '
                          >
                            {sitem.description}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ))}
              <Button type='submit' className='w-full max-w-90'>
                Send
              </Button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}

export default ContactSection;

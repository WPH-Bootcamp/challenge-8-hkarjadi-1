import { motion } from 'motion/react';
import logoContainer from '../../assets/LogoContainer.png';

function TrustedSection() {
  return (
    <div className='flex flex-col justify-center text-center items-center w-full'>
      <div className='text-base font-bold leading-7.5 tracking-[2%] md:text-2xl md:leading-9 text-neutral-950 dark:text-neutral-25'>
        Trusted by Global Innovators & Leading Brands
      </div>
      <div className='w-full h-28 overflow-hidden md:h-50 grayscale'>
        <motion.div
          className='flex shrink-0'
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          }}
        >
          <img
            src={logoContainer}
            alt='logo container'
            className=' object-cover h-28 w-auto md:50'
          />
          <img
            src={logoContainer}
            alt='logo container'
            className=' object-cover h-28 w-auto md:50'
          />
        </motion.div>
      </div>
    </div>
  );
}

export default TrustedSection;

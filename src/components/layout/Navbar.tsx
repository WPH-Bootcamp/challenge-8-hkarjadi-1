import { navItems } from '../../data/navigation';

import CompanyLogo from '../../assets/CompanyLogo.png';
import Burger from '../../assets/burger.svg';
import Burgerdark from '../../assets/burgerdark.svg';
import Button from '../ui/Button';
import '../../index.css';

import DarkModeToggle from './Darkmode';

function Navbar() {
  return (
    <div className='flex fixed w-full mx-auto top-0 z-10 h-16 md:h-21 px-4 py-4 md:py-5 xl:px-35 backdrop-blur-2xl dark:bg-black/40 bg-white/40'>
      <nav className='w-full flex justify-between items-center'>
        {/* *** Company logo *** */}
        <div className='flex items-center '>
          <div className='flex items-center justify-center gap-2'>
            <div>
              <img
                src={CompanyLogo}
                alt='Logo'
                className='w-6.5 h-7 md:w-7.5 md:h-8'
              />
            </div>
            <div className='font-outfit font-semibold text-xl leading-8 tracking-normal '>
              Your Logo
            </div>
          </div>
        </div>
        {/* *** menu list *** */}
        <div className='hidden md:flex md:justify-center text-base leading-7.5 font-semibold md:gap-3 md:py-6 text-neutral-950 dark:text-neutral-25'>
          {navItems.map((item) => (
            <a href={item.href} className='px-4 py-2'>
              {item.label}
            </a>
          ))}
        </div>
        {/* *** burger menu *** */}
        <div>
          <img
            src={Burger}
            alt='menu'
            className='w-6 h-6 block dark:hidden md:hidden'
          />
          <img
            src={Burgerdark}
            alt='menu'
            className='w-6 h-6 hidden dark:block md:hidden md:dark:hidden'
          />
        </div>
        <div className='hidden md:block'>
          <Button size='sm'>Let's Talk</Button>
        </div>
      </nav>
      {DarkModeToggle()}
    </div>
  );
}

export default Navbar;

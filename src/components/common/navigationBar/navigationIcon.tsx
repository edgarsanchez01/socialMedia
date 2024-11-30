import Link from 'next/link';
import type { FC } from 'react';
import Image from 'next/image';

const NavigationIcon: FC = () => {
  return (
    <div className='mb-8 mt-2 flex select-none justify-center lg:justify-start'>
      <Link href={'/'} className='group flex items-center gap-1'>
        
        <span className='pt-1 font-mukta text-[1.6rem] leading-none tracking-wider text-themePrimary-50/100 lg:group-hover:block'>
          Social Media
        </span>
      </Link>
    </div>
  );
};

export default NavigationIcon;

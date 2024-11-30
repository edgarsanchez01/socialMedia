import type { FC } from 'react';
import Link from 'next/link';

const WelcomePageButton: FC = () => {
  return (
    <div className='mx-auto mt-24 flex w-fit gap-4'>
      <Link href='/signin' aria-label='Sign in page'>
        <button className='btn hover:bg-themePrimary-30080 w-28 rounded-lg bg-themePrimary-400 hover:bg-gradient-to-bl hover:from-themePrimary-50/20 hover:to-transparent hover:text-themePrimary-50 '>
          Iniciar Sesion 
        </button>
      </Link>
    </div>
  );
};

export default WelcomePageButton;

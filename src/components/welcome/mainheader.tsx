import type { FC } from 'react';

const WelcomePageMainHeader: FC = () => {
  return (
    <header className='h-1/2 text-center'>
      <header className=''>
        <h1 className='select-none font-unbounded text-8xl tracking-wider text-themePrimary-50'>
          Social Blog
        </h1>
      </header>
      <p>
        <span className='font-mukta tracking-wider text-themePrimary-100/60'>
          Agrega a tus amigos
        </span>
      </p>
    </header>
  );
};

export default WelcomePageMainHeader;

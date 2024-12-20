import Image from 'next/image';
import type { FC } from 'react';
import WelcomePageButton from './buttons';
import Link from 'next/link';

const WelcomePageCards: FC = () => {
  const cardsData: Array<{
    imageUrl: string;
    imageAttributionName: string;
    imageAttribution: string;
    header: string;
    headerGradientText: string;
    description: string;
    textGradientColors: { colorOne: string; colorTwo: string };
  }> = [
    {
      imageUrl: '/static/welcomepage_friends.webp',
      imageAttributionName: 'lobosnico',
      imageAttribution: 'https://unsplash.com/@lobosnico',
      header: 'Agrega a tu',
      headerGradientText: ' familia',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab at velit
      cupiditate! Quasi explicabo, odio voluptate quibusdam iure quas quia
      error. Voluptatem voluptate eum fugiat, exercitationem porro modi
      dolorem! Quos?`,
      textGradientColors: {
        colorOne: 'from-welcomePageGradientColor-1',
        colorTwo: 'to-welcomePageGradientColor-2',
      },
    },
    {
      imageUrl: '/static/welcomepage_family.webp',
      imageAttributionName: 'pablomerchanm',
      imageAttribution: 'https://unsplash.com/@pablomerchanm',
      header: 'Jutos con',
      headerGradientText: 'Social blog',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab at velit
      cupiditate! Quasi explicabo, odio voluptate quibusdam iure quas quia
      error. Voluptatem voluptate eum fugiat, exercitationem porro modi
      dolorem! Quos?`,
      textGradientColors: {
        colorOne: 'from-welcomePageGradientColor-3',
        colorTwo: 'to-welcomePageGradientColor-4',
      },
    },
  ];

  return (
    <div className='mt-24'>
      {cardsData.map((eachCardData, index) => {
        return (
          <div key={index} className='w-full'>
            <article className='relative w-full'>
              <Image
                priority
                className={`-z-10 h-screen select-none object-cover blur-[2px] brightness-[0.4] sm:h-full sm:w-full`}
                alt='image'
                src={eachCardData.imageUrl}
                width={1000}
                height={1000}></Image>

              <header className='absolute left-1/2 top-1/2 w-full max-w-2xl -translate-x-1/2 px-2 text-center sm:top-1/2 sm:px-0'>
                <h1 className='mx-auto font-unbounded text-lg tracking-wide text-themePrimary-50 sm:text-4xl'>
                  {eachCardData.header}&nbsp;
                  <span
                    className={`bg-gradient-to-r ${eachCardData.textGradientColors.colorOne} ${eachCardData.textGradientColors.colorTwo} bg-clip-text text-transparent`}>
                    {eachCardData.headerGradientText}
                  </span>
                </h1>
                {/* <p className='mt-2 font-mukta text-sm leading-tight tracking-wide text-themePrimary-50/90 sm:text-base'>
                  {eachCardData.description}
                </p> */}
              </header>
              <div className='absolute bottom-0 left-0'>
                <span className='font-mukta text-xs font-thin text-themePrimary-50/30 hover:text-themePrimary-50/70 hover:underline sm:text-base'>
                  Image by&nbsp;
                  <Link
                    target={'_blank'}
                    passHref={true}
                    href={eachCardData.imageAttribution}>
                    {eachCardData.imageAttributionName}
                  </Link>
                </span>
              </div>
            </article>
          </div>
        );
      })}
      <div className='flex h-screen w-full items-center justify-center'>
        <article className=''>
          <header className='mx-auto font-unbounded text-lg tracking-wide text-themePrimary-50 sm:text-4xl'>
            Juntos con&nbsp;
            <span
              className={`bg-gradient-to-r  from-welcomePageGradientColor-5 to-welcomePageGradientColor-6 bg-clip-text text-transparent`}>
              social Blog
            </span>
            .
          </header>
          <WelcomePageButton></WelcomePageButton>
        </article>
      </div>
    </div>
  );
};

export default WelcomePageCards;

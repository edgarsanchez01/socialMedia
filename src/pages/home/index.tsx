import HeadComp from '@components/common/headcomponent';
import PageLayout from '@components/layouts/pagelayout';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <HeadComp headTitle='Home'></HeadComp>

      <PageLayout page={'inicio'}></PageLayout>
    </>
  );
};
export default HomePage;

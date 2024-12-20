import HeadComp from '@components/common/headcomponent';
import PageLayout from '@components/layouts/pagelayout';
import type { NextPage } from 'next';

const NotificationsPage: NextPage = () => {
  return (
    <>
      <HeadComp headTitle='Notifications'></HeadComp>

      <PageLayout page={'nontificaciones'}></PageLayout>
    </>
  );
};

export default NotificationsPage;

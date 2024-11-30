import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineBell,
  AiFillBell,
  AiOutlineSetting,
  AiTwotoneSetting,
} from 'react-icons/ai';
import {
  HiOutlineGlobe,
  HiGlobe,
  HiOutlineBookmark,
  HiBookmark,
} from 'react-icons/hi';

const getNavMenuTabs = (iconSize = 32) => {
  const NavMenuTabs: Array<{
    name: string;
    link: string;
    inactivateIcon: JSX.Element;
    activateIcon: JSX.Element;
  }> = [
    {
      name: 'Incio',
      link: '/home',
      inactivateIcon: (
        <AiOutlineHome
          className='navbar-icon-inactive'
          size={iconSize}></AiOutlineHome>
      ),
      activateIcon: (
        <AiFillHome className='navbar-icon-active' size={iconSize}></AiFillHome>
      ),
    },
    {
      name: 'Tendencias',
      link: '/trending',
      inactivateIcon: (
        <HiOutlineGlobe
          className='navbar-icon-inactive'
          size={iconSize}></HiOutlineGlobe>
      ),
      activateIcon: (
        <HiGlobe className='navbar-icon-active' size={iconSize}></HiGlobe>
      ),
    },

    {
      name: 'Nontificaciones',
      link: '/notifications',
      inactivateIcon: (
        <AiOutlineBell
          className='navbar-icon-inactive'
          size={iconSize}></AiOutlineBell>
      ),
      activateIcon: (
        <AiFillBell className='navbar-icon-active' size={iconSize}></AiFillBell>
      ),
    },
    {
      name: 'Guardado',
      link: '/bookmarks',
      inactivateIcon: (
        <HiOutlineBookmark
          className='navbar-icon-inactive'
          size={iconSize}></HiOutlineBookmark>
      ),
      activateIcon: (
        <HiBookmark className='navbar-icon-active' size={iconSize}></HiBookmark>
      ),
    },
    {
      name: 'Configuraciones',
      link: '/settings',
      inactivateIcon: (
        <AiOutlineSetting
          className='navbar-icon-inactive'
          size={iconSize}></AiOutlineSetting>
      ),
      activateIcon: (
        <AiTwotoneSetting
          className='navbar-icon-active'
          size={iconSize}></AiTwotoneSetting>
      ),
    },
  ];
  return NavMenuTabs;
};

export { getNavMenuTabs };

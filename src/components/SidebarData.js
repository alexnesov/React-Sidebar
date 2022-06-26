import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as DiIcons from 'react-icons/di';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Admin',
    path: '/admin',
    icon: <MdIcons.MdOutlineManageAccounts />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Account',
        path: '/Admin/Account',
        icon: <MdIcons.MdOutlineManageAccounts />
      },
      {
        title: 'Investment Infrastructure',
        path: '/Account/Investment_Infrastructure',
        icon: <DiIcons.DiTerminal />
      }
    ]
  },
  {
    title: 'Macro',
    path: '/Macro',
    icon: <BsIcons.BsGlobe />
  },
  {
    title: 'Data',
    path: '/Data',
    icon: <FaIcons.FaDatabase />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Technicals',
        path: '/Data/Technicals',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Ownership',
        path: '/Data/Ownership',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Signals',
    path: '/Signals',
    icon: <GiIcons.GiAerialSignal />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reversal',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Short',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Portfolios',
    path: '/Portfolios',
    icon: <AiIcons.AiOutlineWallet />
  },
  {
    title: 'Buffet',
    path: '/Buffet',
    icon: <MdIcons.MdAccountBalance />
  }
];

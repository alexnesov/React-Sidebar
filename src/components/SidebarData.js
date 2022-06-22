import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Admin',
    path: '/Admin',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Account',
        path: '/Admin/Account',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Investment Infrastructure',
        path: '/Account/Investment_Infrastructure',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Macro',
    path: '/Macro',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Data',
    path: '/Data',
    icon: <IoIcons.IoIosPaper />,
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
    icon: <FaIcons.FaEnvelopeOpenText />,

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
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Buffet',
    path: '/Buffet',
    icon: <IoIcons.IoMdHelpCircle />
  }
];

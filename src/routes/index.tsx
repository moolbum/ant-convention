import React from 'react';
import EstimationManager from '../pages/EstimationManager';
import Login from '../pages/Login';
import Notice from '../pages/SignUp';
import { ItemType } from './types';

export const LinkArray: ItemType[] = [
  {
    mainLink: {
      name: '로그인',
      path: '/login',
      component: <Login />,
    },
    subLink: [],
  },
  {
    mainLink: {
      name: '주의',
      path: '/notice',
      component: <Notice />,
    },
    subLink: [],
  },
  {
    mainLink: {
      name: '대쉬보드',
      path: '/dashBoard',
      component: <EstimationManager />,
    },
    subLink: [],
  },
];

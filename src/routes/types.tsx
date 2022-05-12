import { ReactNode } from 'react';

export interface ItemType {
  mainLink: {
    name: string;
    path: string;
    component: ReactNode;
  };
  subLink: [];
}

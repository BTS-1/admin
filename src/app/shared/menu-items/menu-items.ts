import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Podcast',
    main: [
      {
        state: 'podcast',
        short_label: 'P',
        name: 'Podcast',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'library',
            name: 'Library'
          }
        ]
      },
      {
        state: 'music',
        short_label: 'm',
        name: 'Music',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'list',
            name: 'Music List'
          }
        ]
      }
    ]}
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}

import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'other',
    title: 'Admin',
    type: 'group',
    icon: 'feather icon-align-left',
    children: [
      {
        id: 'Profile-page',
        title: 'Profile Page',
        type: 'item',
        url: '/profile',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'Demo-page',
        title: 'demo Page',
        type: 'item',
        url: '/demo',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'Product-detail',
        title: 'Product Detail',
        type: 'item',
        url: '/productdetail',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'test-detail',
        title: 'TestDetail',
        type: 'item',
        url: '/test',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'menu-level',
        title: 'Menu Levels',
        type: 'collapse',
        icon: 'feather icon-menu',
        children: [
          {
            id: 'menu-level-2.1',
            title: 'Menu Level 2.1',
            type: 'item',
            url: 'javascript:',
            external: true
          },
          {
            id: 'menu-level-2.2',
            title: 'Menu Level 2.2',
            type: 'collapse',
            children: [
              {
                id: 'menu-level-2.2.1',
                title: 'Menu Level 2.2.1',
                type: 'item',
                url: 'javascript:',
                external: true
              },
              {
                id: 'menu-level-2.2.2',
                title: 'Menu Level 2.2.2',
                type: 'item',
                url: 'javascript:',
                external: true
              }
            ]
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

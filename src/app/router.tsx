import { RouteDefinition } from '@solidjs/router';
import { lazy } from 'solid-js';

export const routerConfig: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('../pages/main')),
  },
];

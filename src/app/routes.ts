import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventiListResolver,
  EventsListComponent, CreateSessionComponent
} from './events';

export const appRoutes: Routes = [
  {
    path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']

  },
  {
    path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
  },
  {
    path: 'events', component: EventsListComponent,
    resolve: {
      events: EventiListResolver
    }
  },
  {
    path: '', redirectTo: '/events', pathMatch: 'full'
  },
  {
    path: '404', component: Error404Component
  },
  {
    path: 'events/session/new', component: CreateSessionComponent
  },
  {
    // nova forma de carregar uma fota, de forma dinamica
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
];

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventiListResolver,
  CreateEventComponent,
  SessionListComponent,
  CreateSessionComponent,
  DurationPipe
} from './events' ;

import {NavBarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {EventsAppComponent} from './events-app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';

declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventiListResolver,
    EventRouteActivatorService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    }
  ],

  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

// tslint:disable-next-line:typedef
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}

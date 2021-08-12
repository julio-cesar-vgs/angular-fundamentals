import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import {IEvent} from './shared';

@Component({
  template: `
  <div>
    <h1> Uncoming Angular Events</h1>
    <hr />
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <events-thumbnail [event]="event" ></events-thumbnail>
        </div>
    </div>
    <!-- <h3>{{thumbnail.someProperty}}</h3>
    <button class="btn btn-primary" (click)="thumbnail.logFoo()">Foo</button> -->
</div>
`
})
export class EventsListComponent implements OnInit {
  events: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }
}

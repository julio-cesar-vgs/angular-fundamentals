import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent, ISession} from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession(session: ISession): void {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    debugger
    console.log(nextId);
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession(): void {
    this.addMode = false;
  }
}

import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {IEvent} from './shared';

declare let toastr;

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'events-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <h2>Date: {{event?.date}}</h2>
        <h2>Time: {{event?.time}}</h2>
        <h2>Price: \${{event?.price}}</h2>
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>

        </div>
        <h2>Price: \${{event?.price}}</h2>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>

            <span class="pad-left">Location: {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <!-- <button class="btn btn-primary" (click)="handleClickMe()">Me Aperte pf!  </button>-->

    </div>
    `,
    styles: [`
        .thumbnail{min-height: 210px;}
        .pad-left{margin-left: 10px;}
        .well div{color: #bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    someProperty: any = 'some value';
    // @Output() eventClick = new EventEmitter();

    // handleClickMe() {
    //     this.eventClick.emit(this.eventClick.name);
    // }

  // tslint:disable-next-line:typedef
    logFoo() {
        console.log('foo');
    }

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return { color: '#003300', 'font-weight': 'bold' };
        }
        return {};
    }
}

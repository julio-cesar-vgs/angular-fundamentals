import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../../shared';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() session: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor() {
  }

  ngOnChanges(): void {
    if (this.session) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(this.sortByNameAsc) :
        this.visibleSessions.sort(this.sortByVotesAsc);
    }
  }

  filterSessions(filter): ISession[] {
    if (filter === 'all') {
      this.visibleSessions = this.session.slice(0);
      return this.visibleSessions;
    } else {
      this.visibleSessions = this.session.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

 sortByNameAsc(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) { return 1; }
    else if (s1.name === s2.name) { return 0; }
    else { return -1; }
  }

  sortByVotesAsc(s1: ISession, s2: ISession): number {
    return s2.voters.length - s1.voters.length;
  }

}

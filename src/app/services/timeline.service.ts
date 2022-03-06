import { Injectable } from '@angular/core';
import { add, nextFriday, nextMonday, nextThursday, nextTuesday, nextWednesday, previousDay, startOfWeek, sub } from 'date-fns';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TimelineConfig } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  private start: Date = startOfWeek(Date.now());
  private config$: BehaviorSubject<TimelineConfig> = new BehaviorSubject(this.getNewConfig());


  constructor() {
    this.setConfig();
  }

  getNewConfig(): TimelineConfig {
    return {
      start: this.start,
      monday: nextMonday(this.start),
      tuesday: nextTuesday(this.start),
      wednesday: nextWednesday(this.start),
      thursday: nextThursday(this.start),
      friday: nextFriday(this.start)
    };
  }

  setConfig() {
    this.config$.next(this.getNewConfig());
  }

  getConfig() {
    return this.config$;
  }

  changeWeek(direction: 'left' | 'right') {
    if(direction === 'left') {
      this.start = sub(this.start, {
        weeks: 1
      });
    } else if(direction === 'right') {
      this.start = add(this.start, {
        weeks: 1
      });
    }

    this.setConfig();
  }




}

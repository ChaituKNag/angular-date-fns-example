import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { TimelineService } from 'src/app/services/timeline.service';
import { Note, Tag, TimelineConfig, TimelineNotesConfig } from 'src/app/types';
import { filterNotesByDate } from 'src/app/utils/note-utils';

@Component({
  selector: 'app-timeline-view',
  templateUrl: './timeline-view.component.html',
  styleUrls: ['./timeline-view.component.scss']
})
export class TimelineViewComponent implements OnInit {

  config: TimelineConfig | undefined;
  notes: Note[] = [];
  timelineNotes: TimelineNotesConfig;
  tags: Tag[] = [];

  constructor(private timelineService: TimelineService, private notesService: NotesService) {
    this.timelineService.getConfig().subscribe(_config => {
      this.config = _config;
      this.populateTimelineNotes();
    })
   }

  ngOnInit(): void {
    this.notesService.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
      this.populateTimelineNotes();
    });
    this.notesService.getAllTags().subscribe((tags: Tag[]) => {
      this.tags = tags;
    })
  }

  populateTimelineNotes() {
    if(this.config) {
      this.timelineNotes = {
        monday: filterNotesByDate(this.notes, this.config?.monday),
        tuesday: filterNotesByDate(this.notes, this.config?.tuesday),
        wednesday: filterNotesByDate(this.notes, this.config?.wednesday),
        thursday: filterNotesByDate(this.notes, this.config?.thursday),
        friday: filterNotesByDate(this.notes, this.config?.friday),
      }
      console.log(this.timelineNotes);
    }
    
  }

  changeWeek(direction: 'left' | 'right') {
    this.timelineService.changeWeek(direction)
  }

  getNotesForLabel(notes: Note[] | undefined, label: number) {
    if(notes) {
      return notes.filter(note => note.tags.includes(label));
    }

    return [];
  }

}

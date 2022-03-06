import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineViewComponent } from './components/timeline-view/timeline-view.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NotesService } from './services/notes.service';
import { TimelineService } from './services/timeline.service';

@NgModule({
  declarations: [
    AppComponent,
    TimelineViewComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [
    NotesService, TimelineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

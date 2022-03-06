import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, Tag } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Note[]>('/api/notes');
  }

  getAllTags() {
    return this.http.get<Tag[]>('/api/tags');
  }
}

import { Note } from "../types";

export const filterNotesByDate = (notes: Note[], day: Date) => {
    return notes.filter(note => note.start <= day.getTime() && note.end >= day.getTime());
}
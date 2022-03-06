export type TimelineConfig = {
    start: Date;
    monday: Date;
    tuesday: Date;
    wednesday: Date;
    thursday: Date;
    friday: Date;
}

export type TimelineNotesConfig = undefined | {
    monday: Note[];
    tuesday: Note[];
    wednesday: Note[];
    thursday: Note[];
    friday: Note[];
}

export interface Note {
    id: number;
    message: string;
    tags: number[];
    start: number;
    end: number;
}

export interface Tag {
    id: number;
    label: string;
}
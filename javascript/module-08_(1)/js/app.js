'use strict';
class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  findNoteById = id => this._notes.find(note => note.id === id);

  saveNote = note => (this._notes = [...this._notes, note]);

  deleteNote(id) {
    return (this._notes = this._notes.filter(note => note.id !== id));
  }

  updateNoteContent = (id, updatedContent) =>
    Object.assign(this.findNoteById(id), updatedContent);

  updateNotePriority(id, priority) {
    const newPriority = this.findNoteById(id);
    newPriority.priority = priority;
    return newPriority;
  }

  filterNotesByQuery(query) {
    query = query.toLowerCase();
    return this._notes.filter(
      note =>
        note.title.toLowerCase().includes(query) ||
        note.body.toLowerCase().includes(query),
    );
  }

  filterNotesByPriority = priority =>
    this.notes.filter(note => note.priority === priority);
}
const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);

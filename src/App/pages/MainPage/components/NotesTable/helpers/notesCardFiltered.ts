import type { Note } from '~types/types';

export function notesCardFiltered(data: Note[]) {
	const filteredNotes = data.filter((note) => !note.archived);
	return filteredNotes;
}

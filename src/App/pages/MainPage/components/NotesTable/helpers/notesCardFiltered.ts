export function notesCardFiltered(data: Note[]) {
	const filteredNotes = data.filter((note) => !note.archived);
	return filteredNotes;
}

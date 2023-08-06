export function getDataTypePage(type: string, notes: Note[]) {
	return notes.filter((note) => note.category === type);
}

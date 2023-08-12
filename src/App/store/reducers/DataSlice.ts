import { createSlice } from '@reduxjs/toolkit';

import { data } from '~app/data/data';

function getInitialState() {
	return {
		notes: data,
	};
}

const initialState = getInitialState();

export const dataSlice = createSlice({
	name: 'notes',
	initialState,
	reducers: {
		addNote(state, action) {
			state.notes.push(action.payload);
		},
		deleteNote(state, action) {
			const newNotes = state.notes.filter((elem) => elem.id !== action.payload);
			state.notes = [...newNotes];
		},
		updateNote(state, action) {
			const newNotes = state.notes.map((elem) => {
				if (elem.id === action.payload.id) return action.payload;
				return elem;
			});
			state.notes = [...newNotes];
		},
		toggleArchivedNote(state, action) {
			const note = state.notes.find((elem) => elem.id === action.payload);
			if (note) {
				note.archived = !note.archived;
			}
		},
	},
});

export const { addNote, toggleArchivedNote, deleteNote, updateNote } = dataSlice.actions;

export default dataSlice.reducer;

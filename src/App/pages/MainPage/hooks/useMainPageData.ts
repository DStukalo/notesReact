import { useAppSelector } from '~hooks/redux';
import type { Note } from '~types/types';

export function useMainPageData() {
	const { notes } = useAppSelector((state) => state.dataReducer);
	return notes as Note[];
}

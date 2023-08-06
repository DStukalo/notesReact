import { useAppSelector } from '~hooks/redux';

export function useMainPageData() {
	const { notes } = useAppSelector((state) => state.dataReducer);
	return notes as Note[];
}

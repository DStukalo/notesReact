import { useEffect } from 'react';

import { NotesTable } from './components/NotesTable/NotesTable';
import { SummaryTable } from './components/SummaryTable/SummaryTable';
import { useMainPageData } from './hooks/useMainPageData';

export function MainPage() {
	const notes = useMainPageData();

	useEffect(() => {
		document.title = 'Main';
	}, []);

	return (
		<article className="p-1 mb-8 mx-auto max-w-[1280px] flex justify-center items-center flex-col">
			<NotesTable data={notes} />
			<SummaryTable data={notes} />
		</article>
	);
}

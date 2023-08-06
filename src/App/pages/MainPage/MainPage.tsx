import { useEffect } from 'react';

import { NotesTable } from './components/NotesTable/NotesTable';
import { SummaryTable } from './components/SummaryTable/SummaryTable';
import { useMainPageData } from './hooks/useMainPageData';

import styles from './MainPage.module.css';

export function MainPage() {
	const notes = useMainPageData();

	useEffect(() => {
		document.title = 'Main';
	}, []);

	return (
		<article className={styles.container}>
			<NotesTable data={notes} />
			<SummaryTable data={notes} />
		</article>
	);
}

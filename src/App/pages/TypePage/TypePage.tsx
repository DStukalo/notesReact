import { Link, useParams } from 'react-router-dom';

import { Card } from '~components/Card/Card';
import { NotesHeader } from '~components/NotesHeader/NotesHeader';
import { useAppSelector } from '~hooks/redux';

import { getDataTypePage } from './helpers/getDataTypePage';

import styles from './TypePage.module.css';

export function TypePage() {
	const { type } = useParams();
	const { notes } = useAppSelector((state) => state.dataReducer);

	const data = type ? getDataTypePage(type, notes) : undefined;

	if (!data) {
		return (
			<p>
				Something get wrong!!
				<Link to="/">Go main</Link>
			</p>
		);
	}

	return (
		<article className={styles.container}>
			<h1 className={styles.title}>{type}</h1>
			<div className={styles.table}>
				<NotesHeader />
				{data.map((el) => (
					<Card
						type="notes"
						key={el.id}
						params={{
							title: el.name,
							category: el.category,
							id: el.id,
							content: el.content,
							created: el.createdAt,
							archived: el.archived,
						}}
					/>
				))}
			</div>
		</article>
	);
}

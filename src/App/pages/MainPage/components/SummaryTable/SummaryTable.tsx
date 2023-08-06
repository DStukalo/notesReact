import { Link } from 'react-router-dom';

import { Card } from '~components/Card/Card';

import { useSummaryTableData } from './hooks/useSummaryTableData';
import { SummaryHeader } from './SummaryHeader/SummaryHeader';

import styles from './SummaryTable.module.css';

export function SummaryTable({ data }: { data: Note[] }) {
	const typesList = useSummaryTableData(data);
	return (
		<div className={styles.container}>
			<div className={styles.table}>
				<SummaryHeader />
				{typesList.map((el) => (
					<Link to={`type/${el.name}`} key={el.id}>
						<Card
							type="summary"
							params={{
								category: el.name,
								active: el.active,
								archived: el.archived,
							}}
						/>
					</Link>
				))}
			</div>
		</div>
	);
}

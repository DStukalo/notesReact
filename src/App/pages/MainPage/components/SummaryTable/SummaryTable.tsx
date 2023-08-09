import { Link } from 'react-router-dom';

import { Card } from '~components/Card/Card';

import { useSummaryTableData } from './hooks/useSummaryTableData';
import { SummaryHeader } from './SummaryHeader/SummaryHeader';

export function SummaryTable({ data }: { data: Note[] }) {
	const typesList = useSummaryTableData(data);
	return (
		<div className="max-w-[1280px] mb-7">
			<div className="mb-5 w-full flex justify-center items-center flex-col gap-2">
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

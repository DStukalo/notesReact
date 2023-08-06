import { useId } from 'react';

import { typesTask } from '~app/data/data';

export function useSummaryTableData(data: Note[]) {
	const taskId = useId();
	const idesId = useId();
	const quotesId = useId();
	const randomId = useId();

	const setId = (type: string) => {
		if (type === 'Task') return taskId;
		if (type === 'Idea') return idesId;
		if (type === 'Quotes') return quotesId;
		return randomId;
	};

	const result = typesTask.map((type) => ({
		name: type,
		id: setId(type),
		archived: data
			.filter((el) => el.category === type)
			.filter((el) => el.archived).length,
		active: data
			.filter((el) => el.category === type)
			.filter((el) => !el.archived).length,
	}));

	return result;
}

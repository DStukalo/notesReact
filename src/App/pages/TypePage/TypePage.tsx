import { Link, useParams } from 'react-router-dom';

import { Card } from '~components/Card/Card';
import { NotesHeader } from '~components/NotesHeader/NotesHeader';
import { useAppSelector } from '~hooks/redux';

import { getDataTypePage } from './helpers/getDataTypePage';

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
		<article className="p-1 mb-8 mx-auto max-w-[1280px] flex justify-center items-center flex-col ">
			<h1 className=" text-4xl">{type}</h1>
			<div className="flex flex-col gap-4">
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

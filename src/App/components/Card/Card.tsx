import { useState } from 'react';

import { Button } from '~components/Button/Button';
import { Form } from '~components/Form/Form';
import { Modal } from '~components/Modal/Modal';
import { SvgSprite } from '~components/SvgSprite/SvgSprite';
import { useAppDispatch } from '~hooks/redux';
import { deleteNote, toggleArchivedNote } from '~store/reducers/DataSlice';

import { setDates } from './helpers/setDates';
import { setSvg } from './helpers/setSvg';

type PropsNotesCard = {
	type: 'notes';
	params: {
		title: string;
		category: string;
		created: string;
		content: string;
		id: string;
		archived: boolean;
	};
};

type PropsSummaryCard = {
	type: 'summary';
	params: {
		category: string;
		active: number;
		archived: number;
	};
};

type Props = PropsNotesCard | PropsSummaryCard;

export function Card({ params, type }: Props) {
	const [modalUpdate, setShowModalUpdate] = useState(false);
	const datesFound = type === 'summary' ? null : setDates(params.content);
	const svg = setSvg('w-5 h-5 fill-tertiary-100', params.category);
	const dispatch = useAppDispatch();

	let activeClass;
	if (type === 'notes' && params.archived) {
		activeClass = 'bg-primary-200 hover:bg-primary-300';
	} else {
		activeClass = '';
	}

	return (
		<div
			className={`font-normal p-3 min-h-[50px] w-full md:w-[1240px] flex items-center gap-4 bg-primary-100 hover:bg-primary-300 transition-all duration-300 ${activeClass}`}
		>
			<div className=" w-16 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
				<div className="w-10 h-10 flex items-center justify-center bg-secondary-100 rounded-full">
					{svg}
				</div>
			</div>
			{type === 'notes' && (
				<>
					<div className=" w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start font-bold">
						{params.title}
					</div>
					<div className="w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{params.created}
					</div>
					<div className="w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{params.category}
					</div>
					<div className=" w-52 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{params.content}
					</div>
					<div className="w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{datesFound}
					</div>
					<div className="w-44 overflow-hidden whitespace-nowrap overflow-ellipsis text-start flex gap-1 justify-end">
						<Button
							classes="w-5 border-0 bg-transparent cursor-pointer"
							btnType="button"
							func={() => {
								setShowModalUpdate(true);
							}}
						>
							<SvgSprite
								file="icons"
								id="pen"
								classes="w-5 h-5 fill-current transition-all duration-300 transform hover:cursor-pointer hover:fill-tertiary-100"
							/>
						</Button>
						<Button
							classes="w-5 border-0 bg-transparent cursor-pointer"
							btnType="button"
							func={() => {
								dispatch(toggleArchivedNote(params.id));
							}}
						>
							<SvgSprite
								file="icons"
								id="directory-close"
								classes="w-5 h-5 fill-current transition-all duration-300 transform hover:cursor-pointer hover:fill-tertiary-100"
							/>
						</Button>
						<Button
							classes="w-5 border-0 bg-transparent cursor-pointer"
							btnType="button"
							func={() => {
								dispatch(deleteNote(params.id));
							}}
						>
							<SvgSprite
								file="icons"
								id="bin"
								classes="w-5 h-5 fill-current transition-all duration-300 transform hover:cursor-pointer hover:fill-tertiary-100"
							/>
						</Button>
					</div>
				</>
			)}
			{type === 'summary' && (
				<>
					<div className="w-[415px] overflow-hidden whitespace-nowrap overflow-ellipsis text-start font-bold t">
						{params.category}
					</div>
					<div className="w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{params.active}
					</div>
					<div className="w-48 overflow-hidden whitespace-nowrap overflow-ellipsis text-start">
						{params.archived}
					</div>
				</>
			)}
			{modalUpdate && type === 'notes' && (
				<Modal title="Update note" onClose={setShowModalUpdate}>
					<div className="w-[540px] overflow-hidden">
						<Form
							textButton="Update this note"
							type="update"
							onClose={setShowModalUpdate}
							defaultValues={{
								name: params.title,
								content: params.content,
								category: params.category,
								id: params.id,
							}}
						/>
					</div>
				</Modal>
			)}
		</div>
	);
}

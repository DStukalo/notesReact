import { useState } from 'react';

import { Button } from '~components/Button/Button';
import { Card } from '~components/Card/Card';
import { Form } from '~components/Form/Form';
import { Modal } from '~components/Modal/Modal';
import { NotesHeader } from '~components/NotesHeader/NotesHeader';
import type { Note } from '~types/types';

import { notesCardFiltered } from './helpers/notesCardFiltered';

export function NotesTable({ data }: { data: Note[] }) {
	const [modalCreate, setShowModalCreate] = useState(false);
	const filteredNotes = notesCardFiltered(data);

	const onClickHandler = () => {
		setShowModalCreate(true);
	};

	return (
		<div className="max-w-[1280px] font-bold mb-7">
			<div className="mb-5 w-full flex justify-center items-center flex-col gap-2">
				<NotesHeader />
				{filteredNotes.map((el) => (
					<Card
						key={el.id}
						type="notes"
						params={{
							title: el.name,
							category: el.category,
							created: el.createdAt,
							content: el.content,
							id: el.id,
							archived: el.archived,
						}}
					/>
				))}
			</div>
			<div className="w-full flex justify-end items-center ">
				<Button
					btnType="button"
					func={onClickHandler}
					classes="font-bold rounded-md transition-all ease-in-out duration-400 hover:bg-primary-300 cursor-pointer border px-2 bg-secondary-100 bg-opacity-20"
				>
					Create Note
				</Button>
			</div>
			{modalCreate && (
				<Modal title="Create new note" onClose={setShowModalCreate}>
					<div className="w-[540px]">
						<Form
							type="create"
							textButton="Create new note"
							onClose={setShowModalCreate}
							defaultValues={null}
						/>
					</div>
				</Modal>
			)}
		</div>
	);
}

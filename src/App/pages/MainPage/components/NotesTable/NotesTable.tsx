import { useState } from 'react';

import { Button } from '~components/Button/Button';
import { Card } from '~components/Card/Card';
import { Form } from '~components/Form/Form';
import { Modal } from '~components/Modal/Modal';
import { NotesHeader } from '~components/NotesHeader/NotesHeader';

import { notesCardFiltered } from './helpers/notesCardFiltered';

import styles from './NotesTable.module.css';

export function NotesTable({ data }: { data: Note[] }) {
	const [modalCreate, setShowModalCreate] = useState(false);
	const filteredNotes = notesCardFiltered(data);

	const onClickHandler = () => {
		setShowModalCreate(true);
	};

	return (
		<div className={styles.container}>
			<div className={styles.table}>
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
			<div className={styles.btn_wrapper}>
				<Button btnType="button" func={onClickHandler} classes={styles.btn}>
					Create Note
				</Button>
			</div>
			{modalCreate && (
				<Modal title="Create new note" onClose={setShowModalCreate}>
					<div className={styles.modal}>
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

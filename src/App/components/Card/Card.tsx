import { useState } from 'react';

import { Button } from '~components/Button/Button';
import { Form } from '~components/Form/Form';
import { Modal } from '~components/Modal/Modal';
import { SvgSprite } from '~components/SvgSprite/SvgSprite';
import { useAppDispatch } from '~hooks/redux';
import { deleteNote, toggleArchivedNote } from '~store/reducers/DataSlice';

import { setDates } from './helpers/setDates';
import { setSvg } from './helpers/setSvg';

import styles from './Card.module.css';

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
	const svg = setSvg(styles.logo_icon, params.category);
	const dispatch = useAppDispatch();

	let activeClass;
	if (type === 'notes' && params.archived) {
		activeClass = `${styles.active}`;
	} else {
		activeClass = '';
	}

	return (
		<div className={`${styles.card} ${activeClass}`}>
			<div className={styles.logo_container}>
				<div className={styles.logo}>{svg}</div>
			</div>
			{type === 'notes' && (
				<>
					<div className={styles.title}>{params.title}</div>
					<div className={styles.item}>{params.created}</div>
					<div className={styles.item}>{params.category}</div>
					<div className={styles.item_content}>{params.content}</div>
					<div className={styles.item}>{datesFound}</div>
					<div className={styles.icons}>
						<Button
							classes={styles.btn}
							btnType="button"
							func={() => {
								setShowModalUpdate(true);
							}}
						>
							<SvgSprite file="icons" id="pen" classes={styles.icon} />
						</Button>
						<Button
							classes={styles.btn}
							btnType="button"
							func={() => {
								dispatch(toggleArchivedNote(params.id));
							}}
						>
							<SvgSprite
								file="icons"
								id="directory-close"
								classes={styles.icon}
							/>
						</Button>
						<Button
							classes={styles.btn}
							btnType="button"
							func={() => {
								dispatch(deleteNote(params.id));
							}}
						>
							<SvgSprite file="icons" id="bin" classes={styles.icon} />
						</Button>
					</div>
				</>
			)}
			{type === 'summary' && (
				<>
					<div className={styles.title_summary}>{params.category}</div>
					<div className={styles.item}>{params.active}</div>
					<div className={styles.item}>{params.archived}</div>
				</>
			)}
			{modalUpdate && type === 'notes' && (
				<Modal title="Update note" onClose={setShowModalUpdate}>
					<div className={styles.modal}>
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

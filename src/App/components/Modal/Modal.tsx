import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '~components/Button/Button';
import { SvgSprite } from '~components/SvgSprite/SvgSprite';

import styles from './Modal.module.css';

type ModalProps = {
	title?: string;
	onClose: (showModal: boolean) => void;
	children?: ReactNode;
};

export function Modal({ title, onClose, children }: ModalProps) {
	return ReactDOM.createPortal(
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Button
					btnType="button"
					classes={styles.button_close}
					func={() => {
						onClose(false);
					}}
				>
					<SvgSprite file="icons" id="close" classes={styles.icon} />
				</Button>
				<h2 className={styles.title}>{title}</h2>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root') as HTMLElement
	);
}

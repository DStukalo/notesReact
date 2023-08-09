import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '~components/Button/Button';
import { SvgSprite } from '~components/SvgSprite/SvgSprite';

type ModalProps = {
	title?: string;
	onClose: (showModal: boolean) => void;
	children?: ReactNode;
};

export function Modal({ title, onClose, children }: ModalProps) {
	return ReactDOM.createPortal(
		<div className="fixed z-10 left-0 top-0 w-full h-full bg-secondary-100 bg-opacity-95 flex items-center justify-center">
			<div className="p-4 relative bg-tertiary-100 my-0 mx-auto text-center rounded-md">
				<Button
					btnType="button"
					classes="w-5 h-5 border-0 rounded-full bg-cover absolute top-5 right-5 cursor-pointer flex items-center "
					func={() => {
						onClose(false);
					}}
				>
					<SvgSprite
						file="icons"
						id="close"
						classes="w-5 h-5 transition-all duration-300 transform hover:cursor-pointer hover:fill-primary-300"
					/>
				</Button>
				<h2 className=" text-3xl">{title}</h2>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root') as HTMLElement
	);
}

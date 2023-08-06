import type { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	isDisabled?: boolean;
	classes: string;
	func?: () => void;
	btnType: 'button' | 'submit';
};

export function Button({
	children,
	isDisabled,
	func,
	btnType,
	classes,
}: ButtonProps) {
	return (
		<button
			className={classes}
			onClick={func}
			disabled={isDisabled}
			type={btnType === 'submit' ? 'submit' : 'button'}
		>
			{children}
		</button>
	);
}

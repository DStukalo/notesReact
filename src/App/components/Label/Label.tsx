import type { ReactNode } from 'react';

type LabelProps = {
	forHTML?: string;
	children: ReactNode;
};

export function Label({ forHTML, children }: LabelProps) {
	return (
		<label
			htmlFor={forHTML}
			className="w-full flex flex-col gap-1 min-h-[50px] text-xl text-secondary-200 text-left"
		>
			{children}
		</label>
	);
}

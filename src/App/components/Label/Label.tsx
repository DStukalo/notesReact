import type { ReactNode } from 'react';

import styles from './Label.module.css';

type LabelProps = {
	forHTML?: string;
	children: ReactNode;
};

export function Label({ forHTML, children }: LabelProps) {
	return (
		<label htmlFor={forHTML} className={styles.label}>
			{children}
		</label>
	);
}

import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

import styles from './ErrorMessage.module.css';

type TextFieldProps = {
	message: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl>;
};

export function ErrorMessage({ message }: TextFieldProps) {
	return (
		<span className={styles.error}>
			{' '}
			{typeof message === 'string' && message}
		</span>
	);
}

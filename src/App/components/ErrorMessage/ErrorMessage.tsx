import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type TextFieldProps = {
	message: string | undefined | FieldError | Merge<FieldError, FieldErrorsImpl>;
};

export function ErrorMessage({ message }: TextFieldProps) {
	return (
		<span className="text-error text-xs font-normal tracking-tight text-left">
			{' '}
			{typeof message === 'string' && message}
		</span>
	);
}

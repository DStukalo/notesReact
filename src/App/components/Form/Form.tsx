import { useEffect, useId, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '~components/Button/Button';
import { ErrorMessage } from '~components/ErrorMessage/ErrorMessage';
import { Label } from '~components/Label/Label';
import { useAppDispatch } from '~hooks/redux';
import { addNote, updateNote } from '~store/reducers/DataSlice';

type FormCreateProps = {
	type: 'create';
	onClose: (showModal: boolean) => void;
	textButton: string;
	defaultValues: null;
};

type FormUpdateProps = {
	type: 'update';
	onClose: (showModal: boolean) => void;
	textButton: string;
	defaultValues: {
		name: string;
		content: string;
		category: string;
		id: string;
	};
};

type FormProps = FormUpdateProps | FormCreateProps;

export function Form({ type, onClose, defaultValues, textButton }: FormProps) {
	const defaultNameValue = type === 'update' ? defaultValues.name : '';
	const defaultContentValue = type === 'update' ? defaultValues.content : '';
	const defaultCategoryValue = type === 'update' ? defaultValues.category : '';

	const [disabledButton, setDisabledButton] = useState(true);

	const dispatch = useAppDispatch();

	const nameID = useId();
	const contentID = useId();
	const typeID = useId();

	const newNoteId = useId();

	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: defaultNameValue,
			content: defaultContentValue,
			category: defaultCategoryValue,
		},
	});

	const registers = {
		name: {
			...register('name', {
				required: {
					value: true,
					message: 'You have not entered anything',
				},
				minLength: {
					value: 5,
					message: 'You name is too short',
				},
				maxLength: {
					value: 50,
					message: 'You name is too long',
				},
				pattern: {
					value: /^[A-Z][A-Za-z0-9!@#$%^&*()\-=+\\|[\]{};:'",.<>/? ]*$/,
					message:
						'name starts with an uppercase letter and can consist of letters, digits, and symbols.',
				},
			}),
		},
		category: {
			...register('category', {
				required: {
					value: true,
					message: 'You have not chosen anything',
				},
			}),
		},
		content: {
			...register('content', {
				required: {
					value: true,
					message: 'You have not entered anything',
				},
				minLength: {
					value: 6,
					message: 'You text is too short',
				},
				maxLength: {
					value: 300,
					message: 'You text is too long',
				},
			}),
		},
	};
	useEffect(() => {
		if (type === 'update') {
			setValue('name', defaultNameValue, { shouldValidate: true });
			setValue('content', defaultContentValue, { shouldValidate: true });
			setValue('category', defaultCategoryValue, { shouldValidate: true });
		}
	}, [
		defaultCategoryValue,
		defaultContentValue,
		defaultNameValue,
		setValue,
		type,
	]);

	const onSubmitHandler = handleSubmit((data) => {
		if (type === 'update') {
			const updateData = { ...data, id: defaultValues.id };
			dispatch(updateNote(updateData));
		} else {
			const newNote = {
				id: newNoteId,
				createdAt: new Date().toLocaleDateString('ukrain'),
				archived: false,
				category: data.category,
				content: data.content,
				name: data.name,
			};
			dispatch(addNote(newNote));
			reset();
		}
		onClose(false);
	});

	return (
		<form
			onSubmit={onSubmitHandler}
			className="p-8 box-border rounded-xl flex flex-col gap-1 bg-tertiary-100"
			onChange={() => setDisabledButton(false)}
		>
			<div className="min-h-[90px]">
				<Label forHTML={nameID}>
					Name*
					<input
						id={nameID}
						placeholder="Please enter your name"
						className="min-h-[40px] w-full text-base rounded border p-2 bg-tertiary-100"
						{...registers.name}
					/>
				</Label>
				{errors.name && <ErrorMessage message={errors.name.message} />}
			</div>
			<div className=" min-h-[90px]">
				<Label forHTML={typeID}>
					Category*
					<select
						id={typeID}
						className="min-h-[40px] text-base rounded border p-2 bg-tertiary-100 "
						{...registers.category}
					>
						<option value="Task">Task</option>
						<option value="Random Thought">Random Thought</option>
						<option value="Idea">Idea</option>
						<option value="Quotes">Quotes</option>
					</select>
					{errors.category && (
						<ErrorMessage message={errors.category.message} />
					)}
				</Label>
			</div>
			<div className=" min-h-[120px] ">
				<Label forHTML={contentID}>
					Content*
					<textarea
						className="min-h-[60px] text-base rounded border p-2 bg-tertiary-100"
						placeholder="Please enter your text description that note"
						id={contentID}
						{...registers.content}
					/>
				</Label>
				{errors.content && <ErrorMessage message={errors.content.message} />}
			</div>
			<Button
				btnType="submit"
				classes="border p-2 rounded hover:enabled:bg-primary-300 enabled:bg-tertiary-100 disabled:bg-disabled"
				isDisabled={disabledButton}
			>
				{textButton}
			</Button>
		</form>
	);
}

import { ComponentPropsWithRef, FC, ReactNode, memo } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Schema } from 'zod';
import { Box } from '@mui/material';

interface FormContainerProps<T> {
	onSubmit: (data: T) => void;
	schema: Schema<T>;
	children: ReactNode;
}

const typedMemo: <Component extends FC<any>>(
	component: Component,
	compare?: (prevProps: ComponentPropsWithRef<Component>, newProps: ComponentPropsWithRef<Component>) => boolean
) => Component = memo;

function FormContainer<T>({ schema, onSubmit, children }: FormContainerProps<T>) {
	const methods = useForm<T extends FieldValues ? T : never>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	return (
		<FormProvider {...methods}>
			<Box
				component="form"
				onSubmit={methods.handleSubmit(onSubmit)}
				sx={{
					maxWidth: '100%',

					display: 'grid',
					gap: '20px',
					padding: '10px 10px',
					flex: '1 1 auto',
					minHeight: '100%',
				}}
				className="form-container"
			>
				{children}
			</Box>
		</FormProvider>
	);
}

export default typedMemo(FormContainer);

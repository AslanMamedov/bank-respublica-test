import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInSchema, UserSignIn } from '../types';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { FC, memo } from 'react';

const SignIn: FC = memo(() => {
	const { fin: StoreFin } = useSelector((state: RootState) => state.UserSlice);
	const navigate = useNavigate();
	const methods = useForm<SignInSchema>({
		mode: 'onChange',
		resolver: zodResolver(UserSignIn),
	});

	const onSubmit = ({ fin }: SignInSchema) => {
		if (StoreFin === fin) {
			navigate(`/:${fin}`);
			methods.reset();
		}
	};
	return (
		<Box
			sx={{
				maxWidth: '500px',
				width: '100%',
				height: '100%',
				border: '1px solid rgba(0, 0, 0, .2)',
				borderRadius: '4px',
				padding: '10px 10px',
				display: 'grid',
				gap: '20px',
			}}
			component={'section'}
		>
			<FormProvider {...methods}>
				<Box
					sx={{
						maxWidth: '500px',
						width: '100%',
						height: '100%',

						borderRadius: '4px',
						padding: '10px 10px',
						display: 'grid',
						gap: '20px',
					}}
					component={'form'}
					onSubmit={methods.handleSubmit(onSubmit)}
				>
					<InputField label="Фин" mask={''} name="fin" type="text" />

					<Button
						type="submit"
						variant="outlined"
						disabled={!methods.formState.isValid}
						sx={{ height: '50px', fontSize: '18px' }}
					>
						Войти
					</Button>
					<Button
						type="submit"
						variant="outlined"
						onClick={() => navigate('/signUp')}
						sx={{ height: '50px', fontSize: '18px' }}
					>
						Регистрация
					</Button>
				</Box>
			</FormProvider>
		</Box>
	);
});

export default SignIn;

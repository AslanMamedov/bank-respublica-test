import { handleClickOpenGuarantor, handleCloseGuarantor } from '../redux/slices/ModalSlice';
import { Box, Button, FormControl, DialogActions } from '@mui/material';
import { addGuarantorLists, clearGuarantors } from '../redux/slices/RequestSlice';
import GuarantorModal from '../components/GuarantorModal';
import { handleNext } from '../redux/slices/StepperSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { FC, memo, useCallback, useEffect } from 'react';
import InfoUserFormFields from './InfoUserFormFields';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema, schema } from '../types';
import { RootState } from '../redux/store';
import { Table } from '../components';

const GuarantorLists: FC = memo(() => {
	const dispatch = useDispatch();
	const { guarantorLists } = useSelector((state: RootState) => state.RequestSlice);

	const methods = useForm<UserSchema>({
		mode: 'onChange',
		resolver: zodResolver(schema),
	});

	const onSubmit = useCallback((data: UserSchema) => {
		dispatch(addGuarantorLists(data));
		dispatch(handleCloseGuarantor());
	}, []);

	const onCancelHandler = () => {
		methods.reset();
		dispatch(handleCloseGuarantor());
	};

	const onOpenModalHandler = () => {
		methods.reset();
		dispatch(handleClickOpenGuarantor());
	};

	useEffect(() => {
		dispatch(clearGuarantors());
	}, []);

	return (
		<Box
			className="guarator-form"
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<Button
				variant="outlined"
				onClick={onOpenModalHandler}
				sx={{
					width: '200px',
					marginBottom: '15px',
				}}
				type={'button'}
			>
				Добавить поручителя
			</Button>
			<GuarantorModal>
				<>
					<FormProvider {...methods}>
						<Box
							component={'form'}
							onSubmit={methods.handleSubmit(onSubmit)}
							sx={{
								gap: '20px',
								width: '100%',
								height: '100%',
								display: 'grid',
								borderRadius: '4px',
								padding: '10px 10px',
							}}
						>
							<InfoUserFormFields />
							<DialogActions>
								<Button variant="outlined" type="button" onClick={onCancelHandler}>
									Отменить
								</Button>
								<Button variant="outlined" type="submit">
									Добавить
								</Button>
							</DialogActions>
						</Box>
					</FormProvider>
				</>
			</GuarantorModal>
			<FormControl sx={{ width: '100%', height: '100%' }} error={true} variant="standard">
				<Box
					sx={{
						display: 'grid',
						gap: '10px',
					}}
					component={'div'}
				>
					{!!guarantorLists.length &&
						guarantorLists.map(
							(
								{
									cod,
									fin,
									name,
									date,
									phone,
									seria,
									surname,
									address,
									middlename,
									homenumber,
									registartion,
									passportnumber,
								},
								index
							) => (
								<Table
									key={index}
									head={[
										'Имя',
										'Фамилия',
										'Отчество',
										'Дата рождения',
										'Место проживания',
										'Место регистрации',
										'Номер паспорта',
										'Серия',
										'Код',
										'Фин',
										'Домашний телефон',
										'Мобильный телефон',
									]}
									body={[
										name,
										surname,
										middlename,
										date,
										address,
										registartion,
										passportnumber,
										seria,
										cod,
										fin,
										homenumber,
										phone,
									]}
								/>
							)
						)}
				</Box>
			</FormControl>

			<Button
				onClick={() => dispatch(handleNext())}
				variant="outlined"
				type={'submit'}
				disabled={guarantorLists.length === 0}
				sx={{ marginTop: '20px' }}
			>
				Далее
			</Button>
		</Box>
	);
});

export default GuarantorLists;

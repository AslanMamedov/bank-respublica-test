import { Box, Button, FormControl, Typography } from '@mui/material';
import { addCreditInfo } from '../redux/slices/RequestSlice';
import { handleNext } from '../redux/slices/StepperSlice';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreditForm, creditSchema } from '../types';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { InputField } from '../components';


const CreditInfoForm = memo(() => {
	const dispatch = useDispatch();
	const methods = useForm<CreditForm>({
		mode: 'onChange',
		resolver: zodResolver(creditSchema),
	});

	const onSubmit = useCallback((data: CreditForm) => {
		dispatch(addCreditInfo(data));
		methods.reset();
		dispatch(handleNext());
	}, []);

	return (
		<FormProvider {...methods}>
			<Box
				onSubmit={methods.handleSubmit(onSubmit)}
				component={'form'}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<FormControl sx={{ width: '800px' }} error={false} variant="standard">
					<Typography sx={{ fontSize: 20 }}>Иформация о кредите</Typography>
					<Box sx={{ width: '100%', display: 'grid', gap: '10px', marginTop: '10px' }} component={'div'}>
						<InputField label="Валюта" mask={''} name="currency" type="text" />
						<InputField
							label="Причина оформления бизнес кредита"
							mask={''}
							name="businessCredit"
							type="text"
						/>
					</Box>
					<Box
						sx={{
							width: '100%',
							display: 'grid',
							gap: '10px',
							marginTop: '10px',
							gridTemplateColumns: 'repeat(2, 1fr)',
						}}
						component={'div'}
					>
						<InputField label="Сумма" mask={'0000000000'} name="sum" type="text" />
						<InputField label="Период" mask={'00'} name="period" type="text" />
					</Box>
					<Box sx={{ width: '100%', display: 'grid', gap: '10px', marginTop: '10px' }} component={'div'}>
						<InputField label="Процент" mask={'00'} name="percent" type="text" />
					</Box>
				</FormControl>
				<Button
					disabled={!methods.formState.isValid}
					variant="outlined"
					type={'submit'}
					sx={{ marginTop: '20px' }}
				>
					Далее
				</Button>
			</Box>
		</FormProvider>
	);
});

export default CreditInfoForm;

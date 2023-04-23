import RequestInformation from '../components/RequestInformation';
import CalculationTable from '../components/CalculationTable';
import StepperContainer from '../components/StepperContainer';
import CreditInfoForm from './CreditInfoForm';
import GuarantorLists from './GuarantorLists';
import { Box } from '@mui/material';
import { useCallback } from 'react';
import UserForm from './UserForm';

const FormStepper = () => {
	const stepperForm = useCallback((step: number): JSX.Element => {
		const JsxElemets: JSX.Element[] = [
			<UserForm />,
			<CreditInfoForm />,
			<GuarantorLists />,
			<CalculationTable />,
			<RequestInformation />,
		];
		return JsxElemets[step];
	}, []);
	return (
		<Box
			sx={{
				maxWidth: '100%',
				border: '1px solid rgba(0, 0, 0, .2)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '10px 10px',
				flex: '1 1 auto',
				minHeight: '100%',
			}}
			className="stepper-form"
		>
			<StepperContainer renderProps={stepperForm} />
		</Box>
	);
};

export default FormStepper;

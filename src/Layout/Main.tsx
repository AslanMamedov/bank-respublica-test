import { FC, ReactNode, memo } from 'react';
import { Box } from '@mui/material';

interface MainProps {
	children: ReactNode;
}

const Main: FC<MainProps> = memo(({ children }) => (
	<Box
		maxWidth="sm"
		className="container"
		sx={{
			display: 'flex',
			width: '1440px',
			maxWidth: '100%',
			margin: '0 auto',
			flex: '1 1 auto',
			padding: '15px 15px',
			justifyContent: 'center',
		}}
	>
		{children}
	</Box>
));

export default Main;

import { CreditForm } from './creditInfo';
import { UserInfoForm } from './userInfo';
import { Payment } from './patment';
import { UserSchema } from './user';

export interface Request {
	guarantorLists: UserSchema[];
	calculation: Payment[];
	userInfo: UserInfoForm;
	creditInfo: CreditForm;
}

export interface Credits extends Request {
	credits: Request[];
	allGuarantors: UserSchema[][];
}

export type LoginUserData = {
	password: string;
	email: string;
};

export type ValidateEmailPayload = {
	email: string;
};

export type RegisterPayload = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export interface RegisterPayloadWithOtp extends RegisterPayload {
	otp: string;
}

export interface RegisterFormType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginFormType {
  email: string;
  password: string;
}

export interface verifyEmailFormType {
  email: string;
  verifyCode: string;
}

export interface addProducts {
  banner: File;
  description: string;
  price: string;
  count: string;
  productName: string;
  size: string;
  color: string;
}

import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
  firstName: yup.string().min(3).required('First name is required'),
  lastName: yup.string().min(3).required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required').matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    'Invalid email format'
  ),
  password: yup.string().min(6).required('password is required'),
});

export const loginFormSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required').matches(
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    'Invalid email format'
  ),
  password: yup.string().min(6).required('password is required'),
});

export const verifyEmailSchema = yup.object().shape({
  otp: yup.string().min(6).required('verify email is required'),
});
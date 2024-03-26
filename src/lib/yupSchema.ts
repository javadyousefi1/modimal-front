import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Invalid email format'
      ),
    password: yup.string().required('password is required'),
});
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerScheme, RegisterFormData } from './register.scheme';
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation';

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: 'Thiago Sousa',
      email: 'thiago@email.com',
      phone: '(00) 00000-0000',
      password: '123123123',
      confirmPassword: '123123123',
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    console.log('userData:', userData);

    const { name, email, phone, password } = userData;

    await userRegisterMutation.mutateAsync({
      name,
      email,
      phone,
      password,
      avatarUrl: 'string',
    });
  });

  return { control, onSubmit, errors };
};

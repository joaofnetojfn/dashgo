import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input error={errors.email} type="email" name="email" label="E-mail" {...register('email')} />
          <Input error={errors.password} type="password" name="password" label="Senha" {...register('password')} />
        </Stack>

        <Button isLoading={formState.isSubmitting} type="submit" marginTop="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}

import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


type createUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'Mínimo 6 caracters')
    .required('Senha obrigatória'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});



export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  });

  const { errors } = formState;
  
  const handleCreateUser: SubmitHandler<createUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values);

  }
  

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["5", "8"]}>
            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
                <SimpleGrid minChildWidth="240px" spacing={["5", "8"]} w="100%">
                    <Input name="name" label="Nome Completo"  {...register('name')} error={errors.name} />
                    <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email}  />
                </SimpleGrid>

                <SimpleGrid minChildWidth="240px" spacing={["5", "8"]} w="100%">
                    <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} />
                    <Input name="password_confirmation" type="password" label="Confirmar Senha" {...register('password_confirmation')} error={errors.password_confirmation} />
                </SimpleGrid>
            </VStack>
            
            <Flex mt="8" justify="flex-end">
                <HStack spacing="4">
                  <Link href="/users" passHref>
                    <Button as="a" variant="outline" colorScheme="whiteAlpha">Cancelar</Button>
                  </Link>
                    <Button isLoading={formState.isSubmitting}  type="submit" colorScheme="pink" >Salvar</Button>
                </HStack>
            </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

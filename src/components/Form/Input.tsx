import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
    name:string;
    label?: string;
}

export function Input({ nome, label, ...rest }:InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={nome}>{label}</FormLabel>}
            <ChakraInput 
                id={nome}
                name={nome}
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{bgColor: 'gray.500'}}
                size="lg"
                {...rest}
            />
        </FormControl>
    );
}
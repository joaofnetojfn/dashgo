import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from 'react-icons/ri';
import { useRef } from "react";

export function SearchBox() {
    //Uma forma para controlar formulario com useState, e passar value={search} & onChange={event => setSearch(event.target.value)} 
    // const [search, setSearch] = useState('');
    
    // debounce --> olhar,  busca depois q a pessoa para de digitar

    const searchInputRef = useRef<HTMLInputElement>(null);


    return(
        <Flex
            as="label"
            flex="1"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full">
            <Input
                color="gray.50"
                variant="unstyled"
                px="4"
                mr="4"
                placeholder="Buscar na plataforma."
                _placeholder={{ color:'gray.400 '}}
                ref={searchInputRef}
            />
            <Icon as={RiSearchLine} fontSize="19" />

        </Flex>
    );
}
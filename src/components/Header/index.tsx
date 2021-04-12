import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
import { Profile } from './Profile';
import { NotificationsNav } from './NotificationsNav';
import { SearchBox } from './SearchBox';
import { Logo } from './Logo';

export function Header() {
    const { onOpen } = useSidebarDrawer();
    
    const isWideVersion = useBreakpointValue ({
        base: false,
        lg: true,
    });
    
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            m="4"
            px="6"
            align="center"
            justify="center"
        >
            { !isWideVersion && (
                <IconButton
                    aria-label="open navigation"
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="25"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2" >
                </IconButton>
            )}
            <Logo />

            {isWideVersion && <SearchBox />}

            <Flex
                ml="auto"
                align="center">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}
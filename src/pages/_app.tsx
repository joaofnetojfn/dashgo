import {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {theme} from '../styles/theme';
import {SidebarDrawerProvider} from "../contexts/SidebarDrawerContext";
import {Provider} from 'next-auth/client'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider session={pageProps.session}>
            <ChakraProvider theme={theme}>
                <SidebarDrawerProvider>
                    <Component {...pageProps} />
                </SidebarDrawerProvider>
            </ChakraProvider>
        </Provider>
    )
}

export default MyApp

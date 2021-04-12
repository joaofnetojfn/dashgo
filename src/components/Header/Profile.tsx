import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
	return (
	    <Flex align="center">
	        { showProfileData && (
	            <Box mr="4" textAlign="right">
	                <Text>João</Text>
	                <Text
	                    fontSize="small"
	                    color="gray.300">
	                    Joao@hhtmail.com</Text>
	            </Box>
	        )}
	
	        <Avatar size="md" name="João Ferreira" src="https://github.com/joaofnetojfn.png" />
	    </Flex>
	);
}
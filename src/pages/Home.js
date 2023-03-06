import { Box, Text } from '@chakra-ui/react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
  return (
    <HelmetProvider>
      <Box
        backgroundColor="#004c97"
        paddingTop="20px"
        backgroundImage="linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    )"
      >
        <Helmet>
          <title>Save Contacts</title>
        </Helmet>
        <Text
          height="100%"
          textAlign="center"
          margin="15px"
          fontWeight="bold"
          color="#f5f5f5"
          fontSize="24px"
        >
          <div>Have a nice day!</div>
        </Text>
      </Box>
    </HelmetProvider>
  );
}

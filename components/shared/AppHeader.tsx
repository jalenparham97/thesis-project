import { Box, Header, Title } from '@mantine/core';

export default function AppHeader() {
  return (
    <Header
      height={70}
      p="md"
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? '' : '',
        zIndex: 200,
      })}
    >
      <Box className="flex justify-between items-center h-full">
        <Box className="flex items-center space-x-5">
          <Title order={2}>Thesis App</Title>
        </Box>
        <Box className="flex items-center space-x-3"></Box>
      </Box>
    </Header>
  );
}

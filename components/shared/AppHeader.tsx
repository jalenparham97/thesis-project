import { Box, Button, Header, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

export default function AppHeader() {
  return (
    <Header
      height={60}
      p="md"
      fixed
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? '' : '',
        zIndex: 200,
      })}
    >
      <Box className="flex justify-between items-center h-full">
        <Box className="flex items-center space-x-5">
          <Title order={2} className="text-xl flex space-x-2">
            <span className="flex">
              Affinity Voice<span className="hidden md:block">:</span>
            </span>
            <span className="hidden md:block">
              Arizsia's 2022 Thesis Project
            </span>
          </Title>
        </Box>
        <Box className="flex items-center space-x-3">
          <Button
            component={NextLink}
            className="bg-[#009200] hover:bg-[#2a9a23]"
            href="/pre-survey"
          >
            Take me to phase 1 pre-survey
          </Button>
        </Box>
      </Box>
    </Header>
  );
}

import { Box, Button, Header, Title } from '@mantine/core';

export default function ListenPageHeader() {
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
            className="bg-[#009200] hover:bg-[#2a9a23]"
            component="a"
            href="https://forms.gle/Da8aYZC5WEyK48886"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take me to the post survey
          </Button>
        </Box>
      </Box>
    </Header>
  );
}

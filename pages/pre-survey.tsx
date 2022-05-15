import { useState } from 'react';
import { Box, Button, Checkbox, Container } from '@mantine/core';
import { NextLink } from '@mantine/next';
import PageContainer from '@/components/layouts/PageContainer';
import AppHeader from '@/components/shared/AppHeader';
import Link from 'next/link';

export default function PreSurvey() {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  return (
    <PageContainer header={<AppHeader />}>
      <Container>
        <Box className="space-y-4">
          <Box>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScKhfc3Rqu4PjkhpZvsGPMBBXB2zMUoVRzH1XJkWHtBcnkhxg/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading…
            </iframe>
          </Box>
        </Box>
      </Container>
      <Container size={630}>
        <Box className="space-y-4">
          <Checkbox
            color="violet"
            label="I have filled out the survey"
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
          />
          <Box>
            <Link href="/listen">
              <a>
                <Button
                  className="bg-[#009200] hover:bg-[#2a9a23] w-full sm:w-auto"
                  disabled={!checked}
                >
                  Continue to the listening experience
                </Button>
              </a>
            </Link>
          </Box>
        </Box>
      </Container>
    </PageContainer>
  );
}

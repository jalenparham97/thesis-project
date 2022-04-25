import {
  Box,
  Container,
  Grid,
  Group,
  Select,
  Text,
  Title,
} from '@mantine/core';
import AppHeader from '../components/shared/AppHeader';
import PageContainer from '../components/layouts/PageContainer';
import StoryCard from '@/components/stories/StoryCard';

const stories = new Array(8).fill(0);

const IndexPage = () => (
  <PageContainer header={<AppHeader />}>
    <Container size="xl">
      <Box className="space-y-10">
        <Group position="apart">
          <Box className="space-y-2">
            <Title order={1}>Unlock the best listening experience</Title>
            <Text size="xl">Listen to the best voice for you</Text>
          </Box>
          <Box>
            <Select
              placeholder="Pick a voice"
              defaultValue="black_american"
              data={[
                { value: 'black_american', label: 'Black American' },
                { value: 'white_american', label: 'White American' },
                { value: 'hispanic', label: 'Hispanic' },
                { value: 'asian', label: 'Asian' },
              ]}
            />
          </Box>
        </Group>

        <Grid gutter="xl">
          {stories.map((story) => (
            <Grid.Col xs={12} sm={6} md={6} lg={3}>
              <StoryCard />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Container>
  </PageContainer>
);

export default IndexPage;

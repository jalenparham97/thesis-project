import {
  Box,
  Button,
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
import { NextLink } from '@mantine/next';

const stories = new Array(8).fill(0);

const IndexPage = () => (
  <PageContainer header={<AppHeader />}>
    <Container size="sm">
      <Box className="space-y-10">
        <Box className="space-y-14">
          <Box className="space-y-4">
            <Title order={1} className="text-2xl sm:text-4xl">
              Welcome to the beginning of Affinity.
            </Title>
            <Box className="space-y-4">
              <Text className="leading-loose">
                Affinity is the first storytelling, and meditative listening
                experience of its kind; created, and designed to curate a
                listening experience categorized by "identity", for anyone, and
                everybody.
              </Text>
              <Text className="leading-loose">
                The listener shares an intimate experience with the voice they
                choose to hear. So, why not explore the possibilities of
                experiencing meditation, ease, groundedness, and the joys of
                storytelling through finding an affinity for the kind of voice
                you get to hear?
              </Text>
              <Text className="leading-loose">
                Identity encapsulates a multitude of labels, and the definition
                of it is ever expanding in our modern world (ethnicity, race,
                gender, culture, regionality, etc.) Affinity celebrates that.
              </Text>
              <Text className="leading-loose">
                There are many categories of identity and culture outside of
                those listed, but Affinity comfortably leans into the one’s that
                have the potential to provide the most opportunity for auditory
                cues and signals for our listeners.
              </Text>
              <Text className="leading-loose">
                When we experience vocal auditory stimulation, our brains
                recognize, categorize, and develop a bias or preferential
                response. And with preference, comes the opportunity to choose
                pleasure.
              </Text>
              <Text className="leading-loose">
                So, lean into that, and find your Affinity.
              </Text>
            </Box>
          </Box>
          <Box className="space-y-2">
            <Title order={2} className="text-xl sm:text-2xl">
              Phase 1: The Current Phase
            </Title>
            <Box className="space-y-4">
              <Text className="leading-loose">
                Affinity is currently in its earliest stage as a seed project.
                At this time, we are presenting you with the opportunity to
                listen to one presence body scan from a selection of 10 voices
                sourced from American voiceover artists varying in multiple
                categories of identity: gender, race, ethnicity, dialect, age,
                and regionality. Each voiceover artist has individualized the
                text from the presence body scan. This includes subtle language
                shifts, and or vernacular that aligns with the identity of the
                voiceover artist.
              </Text>
              <Text className="leading-loose">
                There is a required pre and post listening experience survey for
                this phase of Affinity.
              </Text>
              <Text className="leading-loose">
                These practices are in efforts to collect listener responses,
                further develop Affinity to align with our goals, serve
                listeners, and contribute survey findings to Arizsia Staton’s
                (UC, Irvine MFA acting candidate, ℅ 2022) 2022 thesis and
                apprenticeship.
              </Text>
              <Button
                component={NextLink}
                href="/pre-survey"
                className="bg-[#009200] hover:bg-[#2a9a23] w-full sm:w-auto"
              >
                Take me to the pre survey
              </Button>
            </Box>
          </Box>
          <Box className="space-y-2">
            <Title order={2} className="text-xl sm:text-2xl">
              Phase 2: Next Steps
            </Title>
            <Text className="leading-loose">
              After collecting responses from our users in phase one, Affinity
              will utilize its findings to tailor your experience, as well as
              expand the categories of listening experiences, such as:
              medication exercises, affirmations, and short stories. We will
              also be including more voices that vary in identity markers, and
              language to our collection to widen your options. During this
              phase we will continue to use a web format to focus on collecting
              user responses and the efficacy of our approach.
            </Text>
          </Box>
          <Box className="space-y-2">
            <Title order={2} className="text-xl sm:text-2xl">
              Phase 3: Final Development
            </Title>
            <Text className="leading-loose">
              This phase will be Affinity fully realized! This includes the
              convenient implementation of Affinity as an app, fully designed by
              putting our user’s needs first. That includes a commitment to
              growth and expansion by including even more listening experiences,
              story genres, meditation guides, language offers, and more.ww
            </Text>
            <Text className="leading-loose">
              We look forward to having you as a listener on this developmental
              journey.
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  </PageContainer>
);

export default IndexPage;

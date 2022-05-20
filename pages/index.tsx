import { NextLink } from '@mantine/next';
import { Box, Button, Container, Text, Title } from '@mantine/core';
import AppHeader from '../components/shared/AppHeader';
import PageContainer from '../components/layouts/PageContainer';

const IndexPage = () => (
  <PageContainer
    header={<AppHeader />}
    className="bg-[url('https://firebasestorage.googleapis.com/v0/b/affinity-voice.appspot.com/o/images%2Fsmall-rock-piles-on-log.jpeg?alt=media&token=627bd19f-2b3e-409b-b5e6-63bb6b9f51ee')] bg-gradient-to-r from-gray-800 to-gray-700"
  >
    <Box className="w-full h-full">
      <Box className="text-white">
        <Box>
          <Box className="space-y-10">
            <Box className="space-y-14">
              <Container className="space-y-4" size="lg">
                <Title order={1} className="text-2xl sm:text-4xl">
                  Welcome to the beginning of Affinity.
                </Title>
                <Box className="space-y-4">
                  <Text className="leading-loose text-lg">
                    Affinity is the first storytelling, and meditative listening
                    experience of its kind; created, and designed to curate a
                    listening experience categorized by "identity", for anyone,
                    and everybody.
                  </Text>
                  <Text className="leading-loose text-lg">
                    The listener shares an intimate experience with the voice
                    they choose to hear. So, why not explore the possibilities
                    of experiencing meditation, ease, groundedness, and the joys
                    of storytelling through finding an affinity for the kind of
                    voice you get to hear?
                  </Text>
                  <Text className="leading-loose text-lg">
                    Identity encapsulates a multitude of labels, and the
                    definition of it is ever expanding in our modern world
                    (ethnicity, race, gender, culture, regionality, etc.)
                    Affinity celebrates that.
                  </Text>
                  <Text className="leading-loose text-lg">
                    There are many categories of identity and culture outside of
                    those listed, but Affinity comfortably leans into the one’s
                    that have the potential to provide the most opportunity for
                    auditory cues and signals for our listeners.
                  </Text>
                  <Text className="leading-loose text-lg">
                    When we experience vocal auditory stimulation, our brains
                    recognize, categorize, and develop a bias or preferential
                    response. And with preference, comes the opportunity to
                    choose pleasure.
                  </Text>
                  <Text className="leading-loose text-lg">
                    So, lean into that, and find your Affinity.
                  </Text>
                </Box>
              </Container>
              <Container className="space-y-2">
                <Title order={2} className="text-xl sm:text-2xl">
                  Phase 1: The Current Phase
                </Title>
                <Box className="space-y-4">
                  <Text className="leading-loose text-lg">
                    Affinity is currently in its earliest stage as a seed
                    project. At this time, we are presenting you with the
                    opportunity to listen to one presence body scan from a
                    selection of 10 voices sourced from American voiceover
                    artists varying in multiple categories of identity: gender,
                    race, ethnicity, dialect, age, and regionality. Each
                    voiceover artist has individualized the text from the
                    presence body scan. This includes subtle language shifts,
                    and or vernacular that aligns with the identity of the
                    voiceover artist. Please note that the language filter in
                    this phase is a mixture of the English and the other
                    filtered language, we have not integrated full translations
                    yet.
                  </Text>
                  <Text className="leading-loose text-lg">
                    There is a required pre and post listening experience survey
                    for this phase of Affinity.
                  </Text>
                  <Text className="leading-loose text-lg">
                    These practices are in efforts to collect listener
                    responses, further develop Affinity to align with our goals,
                    serve listeners, and contribute survey findings to Arizsia
                    Staton’s (UC, Irvine MFA acting candidate, ℅ 2022) 2022
                    thesis and apprenticeship.
                  </Text>
                  <Button
                    component={NextLink}
                    variant="default"
                    href="/pre-survey"
                    className="w-full sm:w-auto"
                  >
                    Take me to the pre survey
                  </Button>
                </Box>
              </Container>
              <Container className="space-y-2">
                <Title order={2} className="text-xl sm:text-2xl">
                  Phase 2: Next Steps
                </Title>
                <Text className="leading-loose text-lg">
                  After collecting responses from our users in phase one,
                  Affinity will utilize its findings to tailor your experience,
                  as well as expand the categories of listening experiences,
                  such as: medication exercises, affirmations, and short
                  stories. We will also be including more voices that vary in
                  identity markers, and language to our collection to widen your
                  options, and our filtering functions will be more advanced to
                  accommodate these additions. During this phase we will
                  continue to use a web format to focus on collecting user
                  responses and the efficacy of our approach.
                </Text>
              </Container>
              <Container className="space-y-2">
                <Title order={2} className="text-xl sm:text-2xl">
                  Phase 3: Final Development
                </Title>
                <Text className="leading-loose text-lg">
                  This phase will be Affinity fully realized! This includes the
                  convenient implementation of Affinity as an app, fully
                  designed by putting our user’s needs first. That includes a
                  commitment to growth and expansion by including even more
                  listening experiences, story genres, meditation guides,
                  language offers, and more.ww
                </Text>
                <Text className="leading-loose text-lg">
                  We look forward to having you as a listener on this
                  developmental journey.
                </Text>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </PageContainer>
);

export default IndexPage;

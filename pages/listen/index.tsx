import PageContainer from '@/components/layouts/PageContainer';
import {
  Box,
  Button,
  Container,
  Drawer,
  Group,
  Title,
  SimpleGrid,
  Text,
  ActionIcon,
  NativeSelect,
  Avatar,
  ScrollArea,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { voiceActors } from '@/data';
import { VoiceActor } from '@/types';
import { useIsMobile } from '@/hooks/useIsMobile';
import IntroModal from '@/components/shared/IntroModal';
import ListenPageHeader from '@/components/shared/ListenPageHeader';

const musicTracks = [
  {
    name: 'Memories',
    src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
  },
  {
    name: 'Creative Minds',
    src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
  },
];

export default function ListenPage() {
  const isMobile = useIsMobile();
  const [opened, setOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const [voiceFilter, setVoiceFilter] = useState({});
  const [selectedActor, setSelectedActor] = useState<VoiceActor>();
  const [selectedIntroActor, setSelectedIntroActor] = useState<VoiceActor>();
  const [musicPreference, setMusicPreference] = useState('no music');

  const [gender, setGender] = useState('');
  const [sexOrientation, setSexOrientation] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [regionality, setRegionality] = useState('');
  const [language, setLanguage] = useState('');

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClose = () => setOpened(false);

  const handleSelectVoice = (actor) => {
    setSelectedActor(actor);
    setOpened(false);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    setterFunction?: (val: string) => void
  ) => {
    const { name, value } = event.currentTarget;
    setterFunction(value);
    setVoiceFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const buildFilterQuery = (filter) => {
    let query = {};
    for (let keys in filter) {
      if (filter[keys].constructor === String && filter[keys].length > 0) {
        query[keys] = filter[keys];
      }
    }
    return query;
  };

  const filterVoices = (actor: VoiceActor) => {
    const query = buildFilterQuery(voiceFilter);
    for (let key in query) {
      if (
        actor[key] === undefined ||
        actor[key] === '' ||
        !actor[key].includes(query[key])
      ) {
        return false;
      }
    }
    return true;
  };

  const clearFilters = () => {
    setGender('');
    setEthnicity('');
    setSexOrientation('');
    setRegionality('');
    setLanguage('');
    setVoiceFilter({});
  };

  const selectActor = (actor: VoiceActor) => {
    setSelectedActor(actor);
    console.log(actor);
  };

  const openModal = (actor: VoiceActor) => {
    setSelectedIntroActor(actor);
    setModalOpened(true);
  };

  return (
    <PageContainer header={<ListenPageHeader />}>
      <Container size="xl">
        <Group position="apart">
          {isMobile ? (
            <ActionIcon variant="default" component={NextLink} href="/">
              <IconArrowLeft size={16} />
            </ActionIcon>
          ) : (
            <Button
              component={NextLink}
              href="/"
              leftIcon={<IconArrowLeft size={16} />}
              variant="default"
            >
              Back to home
            </Button>
          )}
          <Box className="flex items-center space-x-2">
            <NativeSelect
              placeholder="All Languages"
              name="languages"
              value={musicPreference}
              onChange={(e) => setMusicPreference(e.currentTarget.value)}
              data={[
                { value: 'no music', label: 'Without music' },
                { value: 'music', label: 'With music' },
              ]}
            />
            <Button variant="default" onClick={() => setOpened(true)}>
              {selectedActor ? 'Change voice' : 'Select a voice'}
            </Button>
          </Box>
        </Group>
      </Container>
      <Container>
        {selectedActor && (
          <Box className="space-y-10 mt-10">
            <Title className="text-center" order={1}>
              PRESENCE BODY SCAN
            </Title>
            <Box
              style={{ maxWidth: 550, marginLeft: 'auto', marginRight: 'auto' }}
            >
              <img
                src={selectedActor?.image || ''}
                alt="Random unsplash image"
                className="aspect-square h-[500px] w-full rounded"
              />
            </Box>
            <AudioPlayer
              style={{ borderRadius: '4px', textAlign: 'center' }}
              autoPlay={false}
              src={
                musicPreference === 'no music'
                  ? selectedActor?.audio
                  : selectedActor.musicAudio
              }
              onPlay={(e) => console.log('onPlay')}
              showSkipControls={false}
              showJumpControls={false}
              autoPlayAfterSrcChange={false}
              header={`Voice over by: ${selectedActor?.name}`}
            />
          </Box>
        )}

        {!selectedActor && (
          <Box className="text-center space-y-4 mt-[200px]">
            <Title order={2}>
              Welcome to the Affinity Voice listening experiance
            </Title>
            <Text>
              To start listening press the select a voice button to begin.
            </Text>
            <Button variant="default" onClick={() => setOpened(true)}>
              Select a voice
            </Button>
          </Box>
        )}
      </Container>

      <Drawer
        opened={opened}
        onClose={handleClose}
        title="Select a voice"
        padding="xl"
        size={900}
        position="right"
        classNames={{
          root: 'relative',
          drawer: 'overflow-y-scroll',
        }}
      >
        <ScrollArea type="scroll">
          <SimpleGrid
            cols={5}
            spacing="lg"
            breakpoints={[
              { maxWidth: 'md', cols: 3, spacing: 'md' },
              { maxWidth: 'sm', cols: 2, spacing: 'sm' },
              { maxWidth: 'xs', cols: 2, spacing: 'sm' },
            ]}
          >
            <NativeSelect
              size="xs"
              placeholder="All Gender"
              name="gender"
              value={gender}
              onChange={(e) => handleSelectChange(e, setGender)}
              data={[
                { value: '', label: 'All gender' },
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
              ]}
            />
            <NativeSelect
              size="xs"
              placeholder="All Sex Orientation"
              name="sexOrientation"
              value={sexOrientation}
              onChange={(e) => handleSelectChange(e, setSexOrientation)}
              data={[
                { value: '', label: 'All sex orientation' },
                { value: 'queer', label: 'Queer' },
              ]}
            />
            <NativeSelect
              size="xs"
              placeholder="All Race / Ethnicity"
              name="ethnicity"
              value={ethnicity}
              onChange={(e) => handleSelectChange(e, setEthnicity)}
              data={[
                { value: '', label: 'All ethnicity' },
                { value: 'Black', label: 'Black' },
                { value: 'White', label: 'White' },
                { value: 'Puertorican', label: 'Puertorican' },
                { value: 'Pakistani', label: 'Pakistani' },
                { value: 'Panamanian', label: 'Panamanian' },
                { value: 'Indian', label: 'Indian' },
                { value: 'Hispanic', label: 'Hispanic' },
                { value: 'Nigerian', label: 'Nigerian' },
              ]}
            />
            <NativeSelect
              size="xs"
              placeholder="All Regionality"
              name="regionality"
              value={regionality}
              onChange={(e) => handleSelectChange(e, setRegionality)}
              data={[
                { value: '', label: 'All regionality' },
                {
                  value: 'US Southern',
                  label: 'US Southern',
                },
                {
                  value: 'Midwest',
                  label: 'Midwest',
                },
                {
                  value: 'Puerto Rico',
                  label: 'Puerto Rico',
                },
                {
                  value: 'Nigerian',
                  label: 'Nigerian',
                },
              ]}
            />
            <NativeSelect
              size="xs"
              placeholder="All Languages"
              name="languages"
              value={language}
              onChange={(e) => handleSelectChange(e, setLanguage)}
              data={[
                { value: '', label: 'All languages' },
                { value: 'English', label: 'English' },
                { value: 'Spanish', label: 'Spanish' },
                { value: 'Urdu', label: 'Urdu' },
                { value: 'Yoruba', label: 'Yoruba' },
              ]}
            />
          </SimpleGrid>

          <Box
            className="pt-4 divide-y divide-solid divide-gray-300"
            sx={{ height: '100%' }}
          >
            {voiceActors.filter(filterVoices).map((actor) => (
              <Box
                className="py-3 flex items-center justify-between"
                key={actor.id}
              >
                <Box className="flex items-center space-x-2">
                  <Avatar src={actor.image} alt="it's me" />
                  <Text className="hidden md:block">{actor.name}</Text>
                </Box>

                <Box className="flex items-center space-x-2">
                  <Button
                    size="xs"
                    variant="default"
                    onClick={() => openModal(actor)}
                  >
                    Meet the voice artist
                  </Button>
                  {selectedActor?.name !== actor.name ? (
                    <Button
                      variant="default"
                      size="xs"
                      onClick={() => handleSelectVoice(actor)}
                      className="w-32"
                    >
                      Select voice
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="xs"
                      className="cursor-default w-32"
                    >
                      Selected voice
                    </Button>
                  )}
                </Box>
                <IntroModal
                  opened={modalOpened}
                  onClose={() => setModalOpened(false)}
                  actor={selectedIntroActor}
                />
              </Box>
            ))}
          </Box>
        </ScrollArea>

        <Box className="pt-4 bg-white border-t border-solid border-gray-300 space-x-4">
          <Button variant="default" onClick={clearFilters}>
            Clear filters
          </Button>
          <Button variant="default" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Drawer>
    </PageContainer>
  );
}

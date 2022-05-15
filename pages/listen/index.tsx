import PageContainer from '@/components/layouts/PageContainer';
import AppHeader from '@/components/shared/AppHeader';
import {
  Box,
  Button,
  Container,
  Drawer,
  Group,
  Image,
  Title,
  SimpleGrid,
  Text,
  Select,
  ActionIcon,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { isEmpty } from 'lodash';
import { IconArrowLeft, IconPlayerPlay } from '@tabler/icons';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { voiceActors } from '@/data';
import { VoiceActor } from '@/types';

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
  const [opened, setOpened] = useState(false);

  const [gender, setGender] = useState('');
  const [sexOrientation, setSexOrientation] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [regionality, setRegionality] = useState('');
  const [language, setLanguage] = useState('');

  const [voices, setVoices] = useState(voiceActors);

  const [trackIndex, setTrackIndex] = useState(0);

  const handleClose = () => setOpened(false);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const filterVoices = (actor: VoiceActor) => {
    return (
      actor.gender.toLowerCase() === gender.toLowerCase() ||
      actor.ethnicity.includes(ethnicity)
    );
  };

  const clearFilters = () => {
    setGender('');
    setEthnicity('');
    setSexOrientation('');
    setRegionality('');
    setLanguage('');
  };

  return (
    <PageContainer header={<AppHeader />}>
      <Container size="xl">
        <Group position="apart">
          <Button
            component={NextLink}
            href="/"
            leftIcon={<IconArrowLeft size={16} />}
            variant="default"
          >
            Back to home
          </Button>
          <Button variant="default" onClick={() => setOpened(true)}>
            Select a voice
          </Button>
        </Group>
      </Container>
      <Container>
        <Box className="space-y-10 mt-10">
          <Title className="text-center" order={1}>
            PRESENCE BODY SCAN
          </Title>
          <Box
            style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
              alt="Random unsplash image"
            />
          </Box>
          <AudioPlayer
            style={{ borderRadius: '4px', textAlign: 'center' }}
            // autoPlay
            // layout="horizontal"
            src={musicTracks[trackIndex].src}
            onPlay={(e) => console.log('onPlay')}
            showSkipControls={true}
            showJumpControls={false}
            header={`Now playing: PRESENCE BODY SCAN`}
            // footer="All music from: www.bensound.com"
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
          />
        </Box>
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
        }}
      >
        <SimpleGrid
          cols={5}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 2, spacing: 'sm' },
          ]}
        >
          <Select
            placeholder="Gender"
            value={gender}
            onChange={setGender}
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
          <Select
            placeholder="Sex Orientation"
            value={sexOrientation}
            onChange={setSexOrientation}
            data={[{ value: 'queer', label: 'Queer' }]}
          />
          <Select
            placeholder="Race / Ethnicity"
            value={ethnicity}
            onChange={setEthnicity}
            data={[
              { value: 'Black', label: 'Black' },
              { value: 'White', label: 'White' },
              { value: 'Puertorican', label: 'Puertorican' },
              { value: 'Pakistani', label: 'Pakistani' },
              { value: 'Indian', label: 'Indian' },
              { value: 'Hispanic', label: 'Hispanic' },
              { value: 'Nigerian', label: 'Nigerian' },
            ]}
          />
          <Select
            placeholder="Regionality"
            value={regionality}
            onChange={setRegionality}
            data={[
              { value: 'Jackson, Mississippi', label: 'Jackson, Mississippi' },
              {
                value: 'Midwest, Detroit, Michigan',
                label: 'Midwest, Detroit, Michigan',
              },
              {
                value: 'West Coast - Oregon and Washington',
                label: 'West Coast - Oregon and Washington',
              },
              { value: 'California', label: 'California' },
              {
                value: 'Midwest, Clevland, Ohio',
                label: 'Midwest, Clevland, Ohio',
              },
              {
                value: 'West Coast - California and Washington',
                label: 'West Coast - California and Washington',
              },
              {
                value: 'Abeokuta Nigeria and Minnesota',
                label: 'Abeokuta Nigeria and Minnesota',
              },
            ]}
          />
          <Select
            placeholder="Language"
            value={language}
            onChange={setLanguage}
            data={[
              { value: 'english', label: 'English' },
              { value: 'spanish', label: 'Spanish' },
              { value: 'urdu', label: 'Urdu' },
              { value: 'yoruba', label: 'Yoruba' },
            ]}
          />
        </SimpleGrid>

        <Box
          className="pt-4 pb-10 divide-y divide-solid divide-gray-300"
          sx={{ height: '100%', overflowY: 'scroll' }}
        >
          {isEmpty(voiceActors.filter(filterVoices))
            ? voiceActors.map((actor) => (
                <Box className="py-3 flex items-center justify-between">
                  <Box>
                    <Text>{actor.name}</Text>
                  </Box>
                  <Box className="flex items-center space-x-2">
                    <ActionIcon variant="default">
                      <IconPlayerPlay size={16} />
                    </ActionIcon>
                    <Button variant="default" size="xs">
                      Select voice
                    </Button>
                  </Box>
                </Box>
              ))
            : voiceActors.filter(filterVoices).map((actor) => (
                <Box className="py-3 flex items-center justify-between">
                  <Box>
                    <Text>{actor.name}</Text>
                  </Box>
                  <Box className="flex items-center space-x-2">
                    <ActionIcon variant="default">
                      <IconPlayerPlay size={16} />
                    </ActionIcon>
                    <Button variant="default" size="xs">
                      Select voice
                    </Button>
                  </Box>
                </Box>
              ))}
        </Box>

        <Box className="py-4 px-6 absolute bottom-0 left-0 z-50 bg-white border-t border-solid border-gray-300 w-full space-x-4">
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
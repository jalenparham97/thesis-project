// https://github.com/lhz516/react-h5-audio-player#readme
// https://www.bensound.com/
import PageContainer from '@/components/layouts/PageContainer';
import AppHeader from '@/components/shared/AppHeader';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Select,
  Title,
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function ListenPage() {
  const musicTracks = [
    {
      name: 'Memories',
      src: 'https://www.bensound.com/bensound-music/bensound-memories.mp3',
    },
    {
      name: 'Creative Minds',
      src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
    },
    {
      name: 'Acoustic Breeze',
      src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
    },
    {
      name: 'Sunny',
      src: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
    },
    {
      name: 'Tenderness',
      src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3',
    },
    {
      name: 'Once Again',
      src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3',
    },
    {
      name: 'Sweet',
      src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3',
    },
    {
      name: 'Love',
      src: 'https://www.bensound.com/bensound-music/bensound-love.mp3',
    },
    {
      name: 'Piano Moment',
      src: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3',
    },
    {
      name: 'E.R.F',
      src: 'https://www.bensound.com/bensound-music/bensound-erf.mp3',
    },
    {
      name: 'Dreams',
      src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3',
    },
    {
      name: 'A Day To Remember',
      src: 'https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music',
    },
    {
      name: 'Adventure',
      src: 'https://www.bensound.com/bensound-music/bensound-adventure.mp3',
    },
    {
      name: 'Photo Album',
      src: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3',
    },
    {
      name: 'November',
      src: 'https://www.bensound.com/bensound-music/bensound-november.mp3',
    },
  ];

  const [trackIndex, setTrackIndex] = useState(0);

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
        </Group>
      </Container>
      <Container>
        <Box className="space-y-10 mt-10">
          <Title className="text-center" order={1}>
            Story Title
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
            // style={{ width: "300px" }}
            style={{ borderRadius: '4px', textAlign: 'center' }}
            // autoPlay
            // layout="horizontal"
            src={musicTracks[trackIndex].src}
            onPlay={(e) => console.log('onPlay')}
            showSkipControls={true}
            showJumpControls={false}
            header={`Now playing: ${musicTracks[trackIndex].name}`}
            // footer="All music from: www.bensound.com"
            onClickPrevious={handleClickPrevious}
            onClickNext={handleClickNext}
            onEnded={handleClickNext}
            // other props here
          />
        </Box>
      </Container>
    </PageContainer>
  );
}

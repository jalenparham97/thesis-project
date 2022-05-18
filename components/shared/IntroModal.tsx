import { VoiceActor } from '@/types';
import { Box, Center, Modal, ModalProps } from '@mantine/core';

interface Props extends ModalProps {
  actor: VoiceActor;
}

export default function IntroModal({ opened, onClose, actor }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={`Meet ${actor?.name}`}
      centered
      size="xl"
    >
      <Box className="space-y-10">
        <Box style={{ maxWidth: 550, marginLeft: 'auto', marginRight: 'auto' }}>
          <img
            src={actor?.image || ''}
            alt="Image of voice artist"
            className="aspect-square h-[500px] w-full rounded"
          />
        </Box>
        <Center>
          <audio src={actor?.introAudio} controls></audio>
        </Center>
      </Box>
    </Modal>
  );
}

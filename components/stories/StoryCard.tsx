import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { NextLink } from '@mantine/next';

export default function StoryCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card className="shadow-sm" p="lg" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>Story title</Text>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        deleniti, dolor at voluptas officiis quia perspiciatis repellendus
        aliquid optio maxime.
      </Text>

      <Button
        component={NextLink}
        href="/listen/1"
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
      >
        Listen
      </Button>
    </Card>
  );
}

import { AppShell, Box } from '@mantine/core';

interface Props {
  children: React.ReactNode;
  header?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  className?: string;
}

export default function PageContainer({ children, header, className }: Props) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={header}
      styles={(theme) => ({
        main: {
          padding: '0px !important',
        },
      })}
    >
      <Box className={`py-[100px] ${className}`}>{children}</Box>
    </AppShell>
  );
}

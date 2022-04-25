import { AppShell } from '@mantine/core';

interface Props {
  children: React.ReactNode;
  header?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export default function PageContainer({ children, header }: Props) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={header}
      styles={(theme) => ({
        main: {},
      })}
    >
      {children}
    </AppShell>
  );
}

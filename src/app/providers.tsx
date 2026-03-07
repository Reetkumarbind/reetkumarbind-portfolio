'use client';

import Cursor from '@/components/ui/Cursor';
import ThemeProvider from '@/lib/hooks/use-theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Cursor className="hidden dark:lg:block" />
      {children}
    </ThemeProvider>
  );
}

'use client';
import ThemeProvider from '@/providers/ThemeProvider';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange={false}
      >
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </>
  );
}

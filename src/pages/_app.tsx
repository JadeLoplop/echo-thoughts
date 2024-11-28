import '@/assets/css/global.css'; // Global CSS
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Component dynamically represents the currently active page (e.g., `index.tsx` or `LandingPage/index.tsx`)
  return <Component {...pageProps} />;
}

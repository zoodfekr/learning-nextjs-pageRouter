
import '../styles/globals.css'; // مسیر درست به فایل CSS

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';

import '@/styles/globals.css';
import AuthProvider from '@/providers/AuthProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

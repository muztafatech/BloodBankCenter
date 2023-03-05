import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { AuthProvider } from '../../config/Auth';
import Protector from '../../config/Protector';
const noAuth = ['/', '/login'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthProvider>
      {noAuth.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Protector>
          <Component {...pageProps} />
        </Protector>
      )}
    </AuthProvider>
  );
}

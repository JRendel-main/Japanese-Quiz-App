import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'primereact/resources/themes/viva-light/theme.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import BackToTop from "../components/BackToTop";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jago n8n — Workflow Library</title>
        <meta
          name="description"
          content="Kumpulan workflow n8n siap pakai untuk mengotomasi bisnis dan pekerjaan harian."
        />
        <link rel="icon" href="/logo-n8n.png" sizes="32x32" />
        <link rel="shortcut icon" href="/logo-n8n.png" />
      </Head>
      <Component {...pageProps} />
      <BackToTop />
    </>
  );
}

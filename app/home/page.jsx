"use client"
import Head from 'next/head';
import MainContent from '@/components/Home/Preview';
import Header from '@/components/Home/Header';
import ProgressBar from '@/components/Home/ProgressBar';
export default function Home() {
  return (
    <div>
      <Head>
        <title>VideoCrafter.io</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link rel="icon" type="image/x-icon" href="https://vlsmlsaker.s3.amazonaws.com/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://vlsmlsaker.s3.amazonaws.com/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://vlsmlsaker.s3.amazonaws.com/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://vlsmlsaker.s3.amazonaws.com/favicon/favicon-16x16.png" />
        <link rel="stylesheet" href="https://vlsmlsaker.s3.amazonaws.com/css/style.css" />
        <link rel="stylesheet" href="https://vlsmlsaker.s3.amazonaws.com/css/music.css" />
        <link rel="stylesheet" href="/temp.css" />
      </Head>
      <div></div>
      <Header />
      <ProgressBar />
      <MainContent />
    </div>
  );
}
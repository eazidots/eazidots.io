import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-AU">
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="icon" href="/images/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/images/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <meta name="theme-color" content="#8B4513" />
      </Head>
      <body className="bg-light dark:bg-dark">
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
 if (
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
  `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

'use client';

import './globals.css';
import '../i18n';
import Header from '../components/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-rl-noir.png" />
        <link rel="apple-touch-icon" href="/logo-rl-noir.png" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Portfolio Romain Leunis. Ingénieur/développeur découvre mon travail. Je reste ouvert à des nouvelles opportinités."
        />
        <title>Romain Leunis | Ingénieur logiciel &amp; web</title>
      </head>
      <body>
        <div className="App">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

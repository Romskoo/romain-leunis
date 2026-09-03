'use client';

import './globals.css';
import '../i18n';
import Header from '../components/Header/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-rl-noir.png" />
        <link rel="apple-touch-icon" href="/logo-rl-noir.png" />
        <meta name="theme-color" content="#f4efe1" />
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

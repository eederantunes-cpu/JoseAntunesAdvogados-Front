import { Cinzel } from "next/font/google";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://joseantunesadvogados.com.br"),
  title: {
    default: "José Antunes Advocacia",
    template: "%s | José Antunes Advocacia",
  },
  applicationName: "José Antunes Advocacia",
  creator: "José Antunes Advocacia",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  appleWebApp: {
    title: "José Antunes Advocacia",
    statusBarStyle: "default",
    capable: true
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'José Antunes Advocacia',
  url: 'https://joseantunesadvogados.com.br',
  description: 'Serviços jurídicos e consultoria legal.',
}

const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" >
      <body className={cinzel.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
  
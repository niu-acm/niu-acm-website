import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
 
const gothamFont = localFont({
  src: [
    {
      path: '../../public/fonts/Gotham/Gotham-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham/Gotham-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham/Gotham-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Gotham/Gotham-Black.otf',
      weight: '900',
      style: 'normal',
    }
  ]
})

export const metadata: Metadata = {
  title: "NIU ACM",
  description: "NIU's Premiere Computer Science Organization since 1980, NIU ACM has been the organization for Computer Science students at Northern Illinois University. We provide resources, events, and a community for all students interested in computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gothamFont.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
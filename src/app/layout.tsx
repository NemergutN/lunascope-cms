import "./globals.css"
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DM_Sans } from 'next/font/google'
 
const dm_sans = DM_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.className}>
      <body>
        {children}
        <h1 className="text-3xl font-bold underline">
          hello lunascope!
          </h1>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

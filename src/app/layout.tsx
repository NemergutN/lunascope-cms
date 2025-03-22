import "./globals.css"
import { DM_Sans } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="">{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

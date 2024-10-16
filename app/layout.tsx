import type { Metadata } from 'next';
import localFont from 'next/font/local';
// import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// const vazir = Vazirmatn({ subsets: ['arabic'] });

const vazir = localFont({
  src: '../public/webFonts/Vazirmatn-Light.woff2'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir='rtl' lang='fa-Ir'>
      <body className={vazir.className}>
        <Navbar />
        <div className='flex min-h-dvh flex-col'>{children}</div>
      </body>
    </html>
  );
}

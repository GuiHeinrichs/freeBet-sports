import { Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const montSerrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'FreeBet Sports',
  description: 'All sports news, bets and others',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt'>
      <body className={montSerrat.className}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

import type {Metadata} from 'next';
import './globals.css'; // Global styles
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: 'Domain Hosting BD',
  description: 'Best Web Hosting Company in Bangladesh',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}

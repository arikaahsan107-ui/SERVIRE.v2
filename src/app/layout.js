import { MainApp } from '@/components/MainApp';

export const metadata = {
  title: 'Servire - Home Service Platform',
  description: 'Connect with verified home service professionals across Pakistan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
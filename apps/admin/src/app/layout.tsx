import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NOX CLEAN — Admin Operations Dashboard',
  description: 'Manage bookings, cleaners, dynamic pricing, customers, and operations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

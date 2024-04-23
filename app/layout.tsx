import { inter } from '@/app/ui/fonts';

export const metadata = {
  title: 'NEXT Dashboard',
  description: 'This is a dashboard built with NEXT.js and tailwindcss.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

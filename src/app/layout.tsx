import "./globals.css";
// 푸쉬 테스트
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container px-8 py-4 min-h-[300px]">{children}</body>
    </html>
  );
}

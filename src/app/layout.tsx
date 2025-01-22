import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container px-8 py-4 min-h-[300px]">
        {children}
      </body>
    </html>
  );
}

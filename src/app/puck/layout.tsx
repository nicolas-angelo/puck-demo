import "@measured/puck/dist/index.css";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

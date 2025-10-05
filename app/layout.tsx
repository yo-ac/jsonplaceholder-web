// app/layout.tsx
import "./globals.css";
import { ReactQueryProvider } from "@/lib/ReactQueryProvider";

export const data = {
  title: "JSONPlaceholder App",
  description: "Next.js + React Query + TypeScript Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}

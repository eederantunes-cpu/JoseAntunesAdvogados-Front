import "./globals.css";

export const metadata = {
  title: "José Antunes Advogados",
  description: "Advogado em canoas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt" >
      <body>{children}</body>
    </html>
  );
}

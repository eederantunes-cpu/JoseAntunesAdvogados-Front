import { Cinzel } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "José Antunes Advogados",
  description: "Advogado em canoas",
};

const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" >
      <body className={cinzel.className}>
        {children}
      </body>
    </html>
  );
}
  
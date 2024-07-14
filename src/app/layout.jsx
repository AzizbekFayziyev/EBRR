import { Golos_Text } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContextWrapper from "@/context";
import GoTop from "@/components/UI/GoTop";
import Translation from "@/components/UI/Translation";

const GolosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EBRR",
  description:
    "Tüm hakları saklıdır. Diğer kişiler ne zaman kullanır web sitesinde yer alan bilgi materyalleri, web sitesine bir bağlantı belirttiğinizden emin olun www.ekipmanisguvenlik.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GolosText.className}>
        <ContextWrapper>
          <Navbar />
          {children}
          <Footer />

          <GoTop />
        </ContextWrapper>
      </body>
    </html>
  );
}

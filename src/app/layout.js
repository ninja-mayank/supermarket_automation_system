import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-cover bg-[url('https://img.freepik.com/premium-photo/abstract-blur-defocused-supermarket_1339-129329.jpg')] w-full h-full">
        <Navbar />
        <Footer />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

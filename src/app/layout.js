import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-cover bg-[url('https://www.shutterstock.com/image-photo/supermarket-aisle-shelves-blurred-background-260nw-1972817378.jpg')] w-full h-full">
        {/* <Navbar />
        <Footer /> */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

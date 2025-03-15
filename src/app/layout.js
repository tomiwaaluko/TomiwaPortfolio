import ScrollLinked from "./components/ScrollLinked";
import localFont from "next/font/local";
import Carousel from "./components/Carousel";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tomiwa Aluko",
  description: "Student ePortfolio Website for Tomiwa Aluko",
  icons: {
    icon: "/Logo2Better.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollLinked />
        {children}
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          <Carousel />{" "}
          {/* Places the carousel between Project and Email sections */}
        </div>
      </body>
    </html>
  );
}

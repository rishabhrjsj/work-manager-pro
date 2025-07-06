import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import UserProvider from "../context/userProvider"; // ✔ correct path
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CustomNavbar />
          <Toaster position="top-center" reverseOrder={false} />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}

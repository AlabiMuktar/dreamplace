import type { Metadata } from "next";
import "./globals.css";
import GoogleProvider from "./components/GoogleProvider";
import ReduxProvider from "./state/storeProvider";
import { ToastContainer, toast } from "react-toastify";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <GoogleProvider>{children}</GoogleProvider>
        </ReduxProvider>
        <ToastContainer />
      </body>
    </html>
  );
}

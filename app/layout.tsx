import "./globals.css";
import GlobalLoader from "./global-loader";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "مستر وحید | رنت ویلا و ماشین",
  description: ""
}
export default function RootLayout({ children, } : Readonly<{children : React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {/* <GlobalLoader /> */}
        {children}
      </body>
    </html>
  )
}
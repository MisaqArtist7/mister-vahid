import "./globals.css";
import GlobalLoader from "./global-loader";
export default function RootLayout({ children, } : Readonly<{children : React.ReactNode }>) {
  return (
    <html lang="fa">
      <body>
        <GlobalLoader />
        {children}
      </body>
    </html>
  )
}
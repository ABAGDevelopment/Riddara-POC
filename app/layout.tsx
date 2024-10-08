import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import CustomNavbar from "@/components/CustomNavbar";
import { Navbar } from "@/components/navbar";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="mainImage">
              {children}
            </main>
           {/* <footer className="bg-background w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.riddara.com/"
                title="Riddara Global Homepage"
              >
                
                <p className="copyrights">&copy;2024 Riddara. All Rights Reserved.</p>
              </Link>
            </footer> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}

import localFont from 'next/font/local'
import "./globals.css"
import { ThemeProvider } from "@/components/general/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

const geistSans = localFont({
  src: [
    {
      path: '../public/fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-geist-sans'
})

const geistMono = localFont({
  src: [
    {
      path: '../public/fonts/GeistMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono'
})

export const metadata = {
  title: "Job Portal",
  description: "Find your dream job",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
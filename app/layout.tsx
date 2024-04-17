import { Karla } from 'next/font/google'
import './globals.css'
import { SideBar } from '@/components 1/sidebar';
import Header from '@/components 1/header';
import PageWrapper from '@/components 1/pagewrapper';
import { ThemeProvider } from '@/components 1/theme-provider';
import { Metadata } from 'next';

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})
export const metadata: Metadata = {
  title: "admin dashbord",
  description: "TCJ admin_panel"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className + ' h-screen overflow-hidden'}>
        <ThemeProvider
          themes={['dark', 'custom', 'light']}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <SideBar />
            <div className="flex flex-col h-full w-full">
              <Header />
              <PageWrapper children={children} />
            </div>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}

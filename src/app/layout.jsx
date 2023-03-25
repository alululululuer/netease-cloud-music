import "./globals.css";
import HomeHeader from "@/components/HomeHeader";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "网易云音乐",
  description: "仿网易云音乐，Nextjs13学习项目",
  icons: {
    icon: "/netease-cloud-music-fill.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" className="h-full">
      <body className="flex flex-col h-full">
        {/* Header  */}
        <HomeHeader />

        {/* Main Content */}
        <main className="flex-grow bg-red-100 flex">
          <Sidebar />
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}

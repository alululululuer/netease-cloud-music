import "./globals.css";
import HomeHeader from "@/components/HomeHeader";

export const metadata = {
  title: "网易云音乐",
  description: "仿网易云音乐，Nextjs13学习项目",
  icons: {
    icon: "/netease-cloud-music-fill.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {/* Header  */}
        <HomeHeader />

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}

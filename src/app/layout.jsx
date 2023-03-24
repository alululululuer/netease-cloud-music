import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}

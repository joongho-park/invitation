"use client";

import "@/app/styles/globals.css";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyeongjo = Nanum_Myeongjo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-nanum-myeongjo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${nanumMyeongjo.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>결혼합니다</title>
        <meta name="description" content="중호 & 예림 | 결혼합니다" />
        <meta name="author" content="Yelim & Joongho" />
        <meta property="og:title" content="결혼합니다" />
        <meta property="og:description" content="중호 & 예림 | 결혼합니다" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://joongho-park.github.io/invitation/assets/images/og_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://joongho-park.github.io/invitation/assets/images/og_image.png"
        />
        <meta property="og:image:width" content="1241" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="중호 & 예림 | 결혼합니다" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

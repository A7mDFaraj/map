import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "خارطة الجمعيات الشبابية | المجلس التخصصي للجمعيات الشبابية",
  description: "المنصة التفاعلية الرسمية للخارطة الرقمية للجمعيات الشبابية بالمملكة العربية السعودية. تمكين الوصول للبيانات، تعزيز التكامل، واستكشاف المبادرات الشبابية.",
  keywords: ["خارطة الجمعيات الشبابية", "المجلس التخصصي للجمعيات الشبابية", "SCY", "الجمعيات الشبابية السعودية", "تطوع", "ابتكار شبابي"],
  authors: [{ name: "المجلس التخصصي للجمعيات الشبابية" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body suppressHydrationWarning className="min-h-screen flex flex-col antialiased bg-white text-[#12172e] selection:bg-[#0c7fae] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}

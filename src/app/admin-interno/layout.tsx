import type { Metadata } from "next";
import "@/styles/dashboard/dashboard.css";

export const metadata: Metadata = {
  title: "Area Interna | Plug Go",
  description: "Area interna privada para operacao de leads",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
      nosnippet: true,
    },
  },
  referrer: "no-referrer",
};

export default function InternalAdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="admin-interno-root">{children}</div>;
}

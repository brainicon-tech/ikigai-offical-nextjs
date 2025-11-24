import "./globals.css";
import { Inter, Bungee_Spice, Poppins, Nunito } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

 
<meta name="viewport" content="width=device-width, initial-scale=1" />
const bungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-inter",
});

// Configure Nunito
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  // variable: "--font-nunito",
});

// === SEO-FRIENDLY METADATA ===
export const metadata = {
  title: {
    template: "%s | Ikigai Daycare & Preschool",
    default: "Ikigai Daycare & Preschool | Nurturing Young Minds in Dhaka",
  },
  description:
    "Ikigai is a premier daycare and preschool in Dhaka, offering holistic child development programs, play-based learning, and a nurturing environment for infants, toddlers, and young learners.",
  keywords: [
    "daycare in Dhaka",
    "preschool in Dhaka",
    "child development center",
    "early childhood education",
    "Montessori school Dhaka",
    "play-based learning",
    "infant care Dhaka",
    "toddler education",
    "Ikigai preschool",
    "best daycare Bangladesh",
    "early learning center",
    "kids school Dhaka",
    "nurturing environment for children",
    "child care and development",
    "Ikigai Daycare & Preschool",
  ],
  metadataBase: new URL("https://www.ikigaibd.com"),
  openGraph: {
    title: "Ikigai Daycare & Preschool | Nurturing Young Minds in Dhaka",
    description:
      "Ikigai Daycare & Preschool offers a safe, nurturing, and play-based learning environment for infants, toddlers, and young children in Dhaka.",
    siteName: "Ikigai Daycare & Preschool",
    url: "https://www.ikigaibd.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ikigaibd.com/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ikigai Daycare and Preschool in Dhaka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikigai Daycare & Preschool | Nurturing Young Minds in Dhaka",
    description:
      "Ikigai is a trusted daycare and preschool in Dhaka focused on holistic child development through love, play, and learning.",
    creator: "@ikigaidaycare",
    images: ["https://www.ikigaibd.com/images/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.ikigaibd.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};
// === End of SEO ===

// Viewport configuration
export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts for Material Icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${poppins.className} ${bungeeSpice.className} ${inter.className} ${nunito.className}`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

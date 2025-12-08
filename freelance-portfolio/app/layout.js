// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export const metadata = {
  title: "Jainam Patel — Freelance",
  description: "AI/ML engineer, web developer, GenAI specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

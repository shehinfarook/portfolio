import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Analytics />
      <Footer />
    </>
  );
}

export default App;

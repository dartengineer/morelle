import { useState, useEffect } from "react";
import { Nav, Footer, WhatsAppBtn } from "./components/layout";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  AcademyPage,
  BookingPage,
  ContactPage,
} from "./components/pages";
import "./styles/global.css";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <HomePage setActivePage={setActivePage} />;
      case "About":
        return <AboutPage />;
      case "Services":
        return <ServicesPage setActivePage={setActivePage} />;
      case "Academy":
        return <AcademyPage />;
      case "Booking":
        return <BookingPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <main style={{ minHeight: "100vh" }}>
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
      <WhatsAppBtn />
    </>
  );
}

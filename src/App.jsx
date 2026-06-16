import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageHome from "./pages/PageHome";
import PageEnglish from "./pages/PageEnglish";
import PageConsultancy from "./pages/PageConsultancy";
import PageTeam from "./pages/PageTeam";
import PageContact from "./pages/PageContact";

export default function App() {
  const [page, setPage] = useState("home");

  const pageTitles = {
    home:        "Fluency Bridge Global Limited | English Coaching & NZ Education",
    english:     "English Coaching | Fluency Bridge Global Limited",
    consultancy: "NZ Academic Bridge | University Placement Consultancy",
    team:        "About Us | Fluency Bridge Global Limited",
    contact:     "Contact Us | Fluency Bridge Global Limited",
  };

  useEffect(() => {
    document.title = pageTitles[page] || pageTitles.home;
  }, [page]);

  function navigate(id) {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const pages = {
    home: <PageHome navigate={navigate} />,
    english: <PageEnglish navigate={navigate} />,
    consultancy: <PageConsultancy navigate={navigate} />,
    team: <PageTeam />,
    contact: <PageContact />,
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-700" style={{ fontFamily: "Inter, sans-serif" }}>
      <Navbar current={page} navigate={navigate} />
      <main className="flex-grow pt-20">{pages[page]}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

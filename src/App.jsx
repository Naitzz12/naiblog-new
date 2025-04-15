import { useState, useEffect } from "react";
import ListBerita from "./lib/listBerita";
import { MainPage } from "./components/MainPage";

function App() {
  const [scroll, setScroll] = useState(false);
  const [listView, setListView] = useState(false);

  const toggleView = () => {
    setListView(!listView);
  };

  useEffect(() => {
    const scrollElement = () => {
      const rolY = window.scrollY;

      if (rolY > 700) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", scrollElement);

    return () => window.removeEventListener("scroll", scrollElement);
  }, []);

  return (
    <>
      <nav
        className={`absolute left-0 right-0 flex justify-around items-center py-4 z-10 ${
          scroll ? "fixed top-0 left-0 right-0 w-full" : ""
        }`}
      >
        <h1 className="text-5xl font-bold text-[#0c8ce9]">NB</h1>
        <ul className="flex justify-around items-center-safe gap-10 relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-4 after:h-1 after:w-full after:bg-[#0c8ce9] after:rounded-full">
          <li>
            <a
              href="#main"
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-house"></i> Beranda
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-baseball-bat-ball"></i> Blog Sport
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-microchip"></i> Blog Teknologi
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-car"></i> Blog Otomotif
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex justify-center items-center gap-3 text-sm"
            >
              <i className="fa-solid fa-address-card"></i> Tentang Kami
            </a>
          </li>
          <li
            href=""
            onClick={toggleView}
            className="flex justify-center items-center gap-3 text-sm cursor-pointer relative after:content-[''] after:absolute after:top-0 after:-right-2 after:bg-red-500 after:w-3 after:h-3 after:rounded-full after:animate-ping before:content-[''] before:absolute before:top-0 before:-right-2 before:bg-red-500 before:w-3 before:h-3 before:rounded-full"
          >
            <i className="fa-solid fa-tv"></i> Berita
            <ListBerita isOpen={listView} />
          </li>
        </ul>
        <div className="nm">
          <button className="cursor-pointer bg-[#0c8ce9] text-white px-3 py-2 rounded-md shadow-[0px_7px_0px_0px_rgba(12,_140,_233,_0.8)] transition-all active:shadow-[0px_0px_0px_0px_rgba(12,_140,_233,_0.5)] active:transform-[translateY(10px)]">
            <i className="fa-solid fa-moon"></i> Dark
          </button>
          <div className="hidden">
            <li>Dark</li>
            <li>Light</li>
          </div>
        </div>
      </nav>

      <MainPage />
    </>
  );
}

export default App;

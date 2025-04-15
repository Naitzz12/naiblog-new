import { useState, useEffect } from "react";
import axios from "axios";

function ListBerita({ isOpen }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const api = await axios.get("https://api-berita-indonesia.vercel.app/");
      const data = await api.data;
      setList(data.endpoints);
    })();
  }, []);

  function upperCaseFirstLetter(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }

  return (
    <>
      <ul
        className={`absolute flex justify-center items-start gap-3 flex-col top-12 py-5 pl-7 w-52 bg-white z-10 rounded-2xl shadow-[-1px_2px_22px_-1px_rgba(0,_0,_0,_0.15)] ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        {list.map((lst) => (
          <>
            <li>
              <a href={lst.paths[0].path}>- {upperCaseFirstLetter(lst.name)}</a>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListBerita;

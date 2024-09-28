// const dataKu2 =
//   "https://newsapi.org/v2/top-headlines?country=id&apiKey=bd7f9541754b41229ec2a0e55621c35d";
// const dataKu = "https://jakpost.vercel.app/api/category/business/tech/page/2";
// const dataKu3 =
//   "https://newsdata.io/api/1/news?apikey=pub_4996508e8b612e46dbf5f69824c9951eff174&q=news&country=id&language=id&category=education,sports,technology ";
const dataKu4 = "https://api-berita-indonesia.vercel.app/antara/terbaru";
// const dataKu5 = "http://youth-dt.gl.at.ply.gg:42473/antara/terbaru";
const dataMem = "../database/saran.json";

function scrollingNavbar() {
  const nav = document.querySelector("nav");
  const scrollYtop = window.scrollY;
  if (scrollYtop > 250) {
    nav.classList.add("top");
  } else {
    nav.classList.remove("top");
  }
}

window.addEventListener("scroll", scrollingNavbar);

async function fetchApi() {
  const api = await fetch(dataKu4);
  const data = await api.json();
  // console.log(data.data.posts);
  const col = document.querySelector(".blog-list");
  const getData = data.data.posts;
  for (let i = 0; i < getData.length; ++i) {
    console.log(getData[i]);
    const colloum = document.createElement("div");
    colloum.className = "mydata";
    col.appendChild(colloum);

    const img = document.createElement("img");
    img.src = getData[i].thumbnail;
    colloum.appendChild(img);
    const h3 = document.createElement("h3");
    h3.textContent = getData[i].title;
    colloum.appendChild(h3);
    const p = document.createElement("p");
    p.textContent = getData[i].description;
    colloum.appendChild(p);
    const a = document.createElement("a");
    a.textContent = "Baca Berita";
    a.href = getData[i].link;
    colloum.appendChild(a);

    col.appendChild(colloum);
  }
}

fetchApi();

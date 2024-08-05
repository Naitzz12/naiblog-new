const dataKu2 =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=bd7f9541754b41229ec2a0e55621c35d";
const dataKu = "https://jakpost.vercel.app/api/category/business/tech/page/2";
const dataKu3 =
  "https://newsdata.io/api/1/news?apikey=pub_4996508e8b612e46dbf5f69824c9951eff174&q=news&country=id&language=id&category=education,sports,technology ";
const dataKu4 = "https://api-berita-indonesia.vercel.app/antara/terbaru";
const dataKu5 = "http://youth-dt.gl.at.ply.gg:42473/antara/terbaru";
const dataMem = "../database/saran.json";

async function fetchApi() {
  const api = await fetch(dataKu4);
  const api2 = await fetch(dataMem);
  const data2 = await api2.json();
  const data = await api.json();
  console.log(data.data.posts);
  console.log(data2);

  let dataL = `
  <div class="mydata">
  <img src="${data.data.posts[0].thumbnail}" />
  <h3>${data.data.posts[0].title}</h3>
  <p>${data.data.posts[0].description}</p>
  <a href="${data.data.posts[0].link}">Baca Berita </a>
  </div>
  <div class="mydata">
  <img src="${data.data.posts[1].thumbnail}" />
  <h3>${data.data.posts[1].title}</h3>
  <p>${data.data.posts[1].description}</p>
  <a href="${data.data.posts[1].link}">Baca Berita </a>
  </div>
  <div class="mydata">
  <img src="${data.data.posts[2].thumbnail}" />
  <h3>${data.data.posts[2].title}</h3>
  <p>${data.data.posts[2].description}</p>
  <a href="${data.data.posts[2].link}">Baca Berita </a>
  </div>
  <div class="mydata">
  <img src="${data.data.posts[3].thumbnail}" />
  <h3>${data.data.posts[3].title}</h3>
  <p>${data.data.posts[3].description}</p>
  <a href="${data.data.posts[3].link}">Baca Berita </a>
  </div>
  `;

  document.querySelector(".blog-list").innerHTML = dataL;
}

fetchApi();

// async function apiShow() {
//   const api = await fetch(dataKu4);
//   const data = await api.json();
//   console.log(data);
// }
// apiShow();

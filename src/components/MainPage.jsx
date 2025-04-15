export function MainPage() {
  return (
    <>
      <div
        id="main"
        className="absolute right-0 left-0 bottom-0 top-0 flex justify-center items-center"
      >
        <div className="flex justify-center items-start flex-col gap-7">
          <div className="flex justify-start items-center bg-[rgba(12_140_233)]/50 py-1 px-3.5 rounded-full gap-3 border-3 border-[#246fa4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={17}
              viewBox="0 0 512 512"
            >
              <rect
                width={96}
                height={96}
                x={96}
                y={112}
                fill="none"
                rx={16}
                ry={16}
              ></rect>
              <path
                fill="#fff"
                d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"
              ></path>
              <path
                fill="#fff"
                d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"
              ></path>
            </svg>
            <p>Semua Berita Menjadi Satu</p>
          </div>
          <h1 className="text-7xl font-bold w-7/12">
            Sumber <span className="text-blue-400">Berita</span> Anda Dengan 1{" "}
            <span className="text-blue-400">Website</span>
          </h1>
          <p className="info w-3xl">
            Website ini menyediakan source berita dari berbagai sumber dari
            Antara, CNN, Merdeka, dan masih banyak lagi. Kalian dapat membaca
            berita dengan mudah tanpa harus bolak balik sana sini hanya dengan 1
            website yang menghubungkan semuanya jadi 1
          </p>
          <div>
            <a href="" className="bg-blue-400 py-3 px-7 rounded-lg">
              Baca Sekarang..
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

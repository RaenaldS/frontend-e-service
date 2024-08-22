"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export const metadata = {
  title: "Homepage",
};

const Homepage = async () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div className="container-fluid">
      <nav className="absolute left-0 right-0 top-0 z-50 bg-transparent dark:bg-transparent">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/assets/images/logokukar.png"
              className="h-16"
              alt="Logo kukar"
            />
            <span className="self-center whitespace-nowrap text-2xl font-extrabold text-white">
              Kerta Buana
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-8 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden md:h-10"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-white p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2  text-black hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-lg md:text-white md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2  text-black hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-lg md:text-white md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Profil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2  text-black hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-lg md:text-white md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded px-3 py-2  text-black hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:text-lg md:text-white md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="h-screen content-center bg-gray-700 bg-[url('/assets/images/sawah.jpg')] bg-cover bg-no-repeat bg-blend-multiply">
        <div className="mx-auto max-w-screen-xl px-4 py-24 text-center md:items-center ">
          <img
            src="/assets/images/logokukar.png"
            alt="logo kukar"
            className="mx-auto h-24 pb-3 md:h-40"
          />
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-white md:text-3xl lg:text-4xl">
            SISTEM INFORMASI DESA KERTA BUANA
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
            Kec. Tenggarong Seberang Kab. Kukar
          </p>

          <div className="mx-auto grid grid-cols-2 justify-items-center gap-5 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:gap-32">
            <div className="card w-36 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-green-500/50 md:w-64 ">
              <div className="card-body items-center text-center">
                <img
                  src="/assets/images/ktp.svg"
                  className="w-8 hover:scale-110 md:w-16"
                  alt="ktp"
                />
                <p className="text-xs font-bold md:text-base">
                  Surat Pengantar KTP
                </p>
              </div>
            </div>
            <div className="card w-36 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-green-500/50 md:w-64 ">
              <div className="card-body items-center text-center">
                <img
                  src="/assets/images/smiley.svg"
                  className="w-8 hover:scale-110 md:w-16"
                  alt="smiley"
                />
                <p className="text-xs font-bold md:text-base">
                  Surat Berkelakuan Baik
                </p>
              </div>
            </div>
            <div className="card w-36 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-green-500/50 md:w-64 ">
              <div className="card-body items-center text-center">
                <img
                  src="/assets/images/menikah.svg"
                  className="w-8 hover:scale-110 md:w-16"
                  alt="menikah"
                />
                <p className="text-xs font-bold md:text-base">
                  Surat Keterangan Belum Menikah
                </p>
              </div>
            </div>
            <div className="card w-36 bg-base-100 shadow-xl hover:shadow-lg hover:shadow-green-500/50 md:w-64 ">
              <div className="card-body items-center text-center">
                <img
                  src="/assets/images/miskin.svg"
                  className="w-8 hover:scale-110 md:w-16"
                  alt="miskin"
                />
                <p className="text-xs font-bold md:text-base">
                  Surat Keterangan Tidak Mampu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 p-5 md:rounded-md md:bg-white md:p-10 md:shadow-lg">
        <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-black md:mb-10 md:py-5 md:text-3xl lg:text-4xl">
          PENGUMUMAN TERBARU DESA
        </h1>
        <div className="grid grid-cols-1 items-center justify-items-center gap-5 space-y-5 p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="card h-48 w-full bg-base-100 shadow-lg shadow-green-500/50 md:h-44 md:w-80 lg:w-72 xl:w-64">
            <div className="card-body items-center">
              <h2 className="card-title mx-auto text-center font-extrabold underline decoration-sky-500">
                17 Agustus
              </h2>
              <p className="text-center">
                Desa akan mengadakan lomba di aula desa Kerta Buana
              </p>
            </div>
          </div>
          <div className="card h-48 w-full bg-base-100 shadow-lg shadow-green-500/50 md:h-44 md:w-80 lg:w-72 xl:w-64">
            <div className="card-body">
              <h2 className="card-title mx-auto text-center font-extrabold underline decoration-sky-500">
                17 Agustus
              </h2>
              <p className="text-center">
                Desa akan mengadakan lomba di aula desa Kerta Buana
              </p>
            </div>
          </div>
          <div className="card h-48 w-full bg-base-100 shadow-lg shadow-green-500/50 md:h-44 md:w-80 lg:w-72 xl:w-64">
            <div className="card-body">
              <h2 className="card-title mx-auto text-center font-extrabold underline decoration-sky-500">
                17 Agustus
              </h2>
              <p className="text-center">
                Desa akan mengadakan lomba di aula desa Kerta Buana
              </p>
            </div>
          </div>
          <div className="card h-48 w-full bg-base-100 shadow-lg shadow-green-500/50 md:h-44 md:w-80 lg:w-72 xl:w-64">
            <div className="card-body">
              <h2 className="card-title mx-auto text-center font-extrabold underline decoration-sky-500">
                17 Agustus
              </h2>
              <p className="text-center">
                Desa akan mengadakan lomba di aula desa Kerta Buana
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-10 md:box-content md:rounded-md md:bg-white md:shadow-lg  ">
        <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-black md:-mb-5 md:py-10 md:text-3xl lg:text-4xl">
          SAMBUTAN KEPALA DESA
        </h1>
        <div className="mx-auto grid grid-cols-1 gap-6 p-5 md:grid-cols-2 md:items-center  ">
          <div className="lg:h-auto lg:w-full">
            <img
              src="assets/images/ketut-basuki.jpg"
              alt="Sambutan Kepala Desa"
              className="mx-auto h-auto w-full rounded-lg md:w-10/12 lg:w-8/12"
            />
          </div>
          <div className="pt-5 md:pr-5 md:pt-0 lg:pr-10">
            <p className="text-justify text-lg font-semibold leading-relaxed md:text-base md:leading-normal lg:text-lg xl:text-xl xl:leading-loose">
              Selamat datang di website resmi Desa Kerta Buana. Sebagai Kepala
              Desa, saya merasa bangga dapat mempersembahkan platform ini
              sebagai sarana informasi dan komunikasi bagi seluruh masyarakat.
              Semoga dengan adanya website ini, kita semua dapat lebih mudah
              mengakses informasi terkini seputar desa, serta mempererat
              silaturahmi dan gotong royong dalam membangun Desa Kerta Buana
              yang lebih maju, sejahtera, dan berdaya saing.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-10 md:box-content md:rounded-md md:bg-white md:shadow-lg">
        <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-black md:-mb-5 md:py-10 md:text-3xl lg:text-4xl">
          SERBA-SERBI DESA
        </h1>
        <div className="mx-auto grid grid-cols-1 gap-6 p-5 md:grid-cols-3 ">
          <div className="pt-5 md:col-span-2 md:pr-5 md:pt-0 lg:pr-10">
            <p className="text-justify text-lg font-semibold leading-relaxed md:mx-auto md:text-base md:leading-normal lg:text-lg xl:text-xl xl:leading-loose">
              Desa Kerta Buana di Kecamatan Tenggarong Seberang dikenal dengan
              kekayaan alam dan budayanya. Dikelilingi lahan pertanian subur,
              desa ini menjadi pusat hasil bumi yang melimpah. Dengan
              pemandangan alam yang indah dan tradisi lokal yang masih terjaga,
              Kerta Buana juga menawarkan potensi wisata pedesaan yang
              menjanjikan. Gotong royong dan kebersamaan menjadi nilai utama
              dalam kehidupan masyarakatnya yang terus berkembang.
            </p>

            <div
              id="controls-carousel"
              className="relative w-full"
              data-carousel="static"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/assets/images/cr-1.jpg"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item="active"
                >
                  <img
                    src="/assets/images/cr-2.jpeg"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/assets/images/cr-3.jpg"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>

                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="/assets/images/cr-4.jpg"
                    className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                </div>
              </div>

              <button
                type="button"
                className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
                  <svg
                    className="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
          <div className="clip-irregular md:flex md:items-center lg:h-auto lg:w-full ">
            <img
              src="assets/images/bg-desa.svg"
              alt="Sambutan Kepala Desa"
              className=" lg:w-12/12 md:w-12/12 hidden h-auto w-full rounded-lg md:my-auto md:block"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto my-10 md:box-content md:rounded-md md:bg-white md:shadow-lg">
        <h1 className="text-center text-2xl font-extrabold leading-none tracking-tight text-black md:-mb-5 md:py-10 md:text-3xl lg:text-4xl">
          CONTACT US
        </h1>

        <div className="xsm:p-10 p-5">
          <div className="lg:grid lg:grid-cols-2 lg:space-x-8">
            <div className="mb-6 w-full md:flex md:justify-end lg:mb-0 lg:w-auto">
              <img
                className="h-auto w-auto object-cover lg:h-[70vh] "
                src="assets/images/asn.png"
                alt="Thinking Girl"
              />
            </div>

            <div className=" grid gap-6 sm:grid-cols-2 md:mx-auto lg:max-w-[600px] lg:grid-cols-2">
              <div className="flex items-center justify-center space-y-3 rounded-md bg-[#353535]  p-6 text-center text-white">
                <div className="">
                  <h2 className="font-bold ">CONTACT US</h2>
                  <p className="text-base md:text-xl ">
                    Silahkan Hubungi Kami Melaui Kontak Yang Tertera
                  </p>
                </div>
              </div>

              <div className="space-y-3 rounded-md bg-[#353535] p-6 text-center text-white">
                <div className="icon m-auto flex h-12 w-12 items-center justify-center rounded-full text-3xl ring-4 ring-white">
                  <i className="fa-solid fa-envelope">
                    <img
                      src="assets/images/email.svg"
                      className="bg-white"
                      alt=""
                    />
                  </i>
                </div>
                <h2 className="font-bold">EMAIL</h2>
                <div className="space-y-1">
                  <a
                    href="mailto:Hello@company.com"
                    className="block text-base md:text-xl"
                  >
                    Hello@company.com
                  </a>
                  <a
                    href="mailto:support@company.com"
                    className="block text-base md:text-xl"
                  >
                    support@company.com
                  </a>
                </div>
              </div>

              <div className="space-y-3 rounded-md bg-[#353535] p-6 text-center text-white">
                <div className="icon m-auto flex h-12 w-12 items-center justify-center rounded-full text-3xl ring-4 ring-white">
                  <i className="fa-solid fa-location-dot">
                    <img
                      src="assets/images/location.svg"
                      className="bg-white"
                      alt=""
                    />
                  </i>
                </div>
                <h2 className="font-bold">ADDRESS</h2>
                <div className="text-base md:text-xl">
                  Kalimantan Timur, Kab. Kutai Kartanegara, Kec. Tenggarong
                  Seberang, 75262
                </div>
              </div>

              <div className="space-y-3 rounded-md bg-[#353535] p-6 text-center text-white">
                <div className="icon m-auto flex h-12 w-12 items-center justify-center rounded-full text-3xl ring-4 ring-white">
                  <i className="fa-solid fa-phone">
                    <img
                      src="assets/images/call.svg"
                      className="bg-white"
                      alt=""
                    />
                  </i>
                </div>
                <h2 className="font-bold">CALL US</h2>
                <div className="text-base md:text-xl">
                  1(123) 456-789 1(123) 456-789
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer bg-base-200 p-10 text-base-content">
        <aside>
          <img
            src="/assets/images/logokukar.png"
            className="h-16 fill-current"
            alt="Logo kukar"
          />
          <p>
            Desa Kerta Buana
            <br />
            Kab. Kukar Kec. Loa Janan
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Hubungi Kami</h6>
          <p className="text-base">
            Kalimantan Timur, Kab. Kutai Kartanegara, Kec. Tenggarong Seberang,
            75262
          </p>
          <a className="link-hover link">Telepon : 08xx-xxxx-xxx</a>
          <a className="link-hover link">Email : Desa@gmail.com</a>
        </nav>
        <nav>
          <h6 className="footer-title">Layanan Terkait (Surat)</h6>
          <a className="link-hover link">Pengantar KTP</a>
          <a className="link-hover link">Berkelakuan Baik</a>
          <a className="link-hover link">Belum Menikah</a>
          <a className="link-hover link">Tidak Mampu</a>
        </nav>
      </footer>
    </div>
  );
};

export default Homepage;

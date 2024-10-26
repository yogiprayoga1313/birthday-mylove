import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoNetflix from "../assets/logo-netflix/NetflixLogo.png";
import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import backgroundImg from "../assets/images-mylove/background.png";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// Import images directly
import img1 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.33 AM (2).jpeg"; // Replace with your actual image paths
import img2 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.22 AM (1).jpeg";
import img3 from "../assets/images-mylove/sayang-1.png";
import img4 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.27 AM.jpeg";
import img5 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.26 AM.png";
import img6 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.24 AM (1).jpeg";
import img7 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.23 AM (1).jpeg";
import img8 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.22 AM.jpeg";
import img9 from "../assets/images-mylove/WhatsApp Image 2024-10-26 at 9.29.21 AM.jpeg";
const images = [backgroundImg, img2, img3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMoreInfo, setShowMoreInfo] = useState(false); // New state for showing More Info

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="bg-cover object-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="bg-black bg-opacity-70 h-screen">
        <div>
          <div className="flex justify-between px-4 md:px-16 items-center">
            <div className="flex justify-center items-center gap-4 md:gap-10">
              <div className="w-24 h-16 md:w-32 md:h-24 flex justify-center items-center">
                <img src={LogoNetflix} alt="logo netflix" />
              </div>
              <div className="flex gap-2 md:gap-5 text-white cursor-pointer text-xs md:text-base">
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 font-semibold">
                  Home
                </p>
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 font-semibold">
                  Series
                </p>
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 font-semibold">
                  Movie
                </p>
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 font-semibold">
                  New and Popular
                </p>
                <p className="hover:border-b hover:border-red-500 hover:text-red-500 font-semibold">
                  My list
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-5">
              <div>
                <FaSearch size={20} color="white" />
              </div>
              <div>
                <IoMdNotifications size={20} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* upcapan */}
        {!showMoreInfo && ( // Conditionally render upcapan based on state
          <div className="flex flex-col gap-5 px-4 md:px-16 pt-24 md:pt-72">
            <div className="text-3xl md:text-4xl w-full md:w-[600px] text-white font-bold">
              <p>Happy Birthday to MyLove</p>
            </div>
            <div className="text-white opacity-70 w-full md:w-[600px]">
              <p>
                Selamat ulang tahun, cintaku! Di hari spesial ini, aku hanya
                ingin kau tahu betapa berartinya dirimu bagiku. Semoga semua
                impianmu tercapai dan kita bisa menciptakan lebih banyak
                kenangan indah bersama.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <div
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
                className="bg-white gap-2 font-semibold cursor-pointer rounded-lg w-full md:w-32 py-3 flex justify-center items-center"
              >
                <div>
                  <FaPlay color="black" />
                </div>
                <button className="text-black">Play</button>
              </div>
              <div>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl h-auto">
                    <div className="flex justify-end">
                      <form method="dialog">
                        <button className="py-3">
                          <IoClose size={30} />
                        </button>
                      </form>
                    </div>
                    <div className="h-[350px] w-full">
                      <img
                        src={images[currentImageIndex]} // Display current image
                        alt={`Slide ${currentImageIndex + 1}`}
                        className="rounded-lg h-[350px] w-full object-cover bg-cover"
                      />
                    </div>
                    <div className="text-white py-5 gap-3 flex flex-col">
                      <p className="font-bold text-xl md:text-3xl">
                        Happy Birthday Cintaku, Cahyaning Eka Purti
                      </p>
                      <p>Hai sayang...</p>
                      <p className="opacity-80">
                        Selamat ulang tahun untukmu, kekasihku yang paling
                        berharga! Pada hari ini, aku ingin merayakan bukan hanya
                        ulang tahunmu, tetapi juga semua momen indah yang telah
                        kita lalui bersama. Kamu adalah orang yang selalu
                        membuatku merasa dicintai dan dihargai. Di tahun yang
                        baru ini, aku berharap kita bisa lebih saling memahami
                        dan mendukung satu sama lain. Semoga setiap harimu penuh
                        dengan cinta, tawa, dan kebahagiaan yang tidak pernah
                        pudar. Aku mencintaimu lebih dari kata-kata dapat
                        ungkapkan. Selamat ulang tahun, sayangku!
                      </p>
                      <div className="py-4">
                        <p>With all my love</p>
                        <p className="font-semibold">Yogi Prayoga</p>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
              <div
                onClick={() => setShowMoreInfo(true)} // Set state to show more info
                className="bg-white bg-opacity-30 cursor-pointer text-white font-semibold px-3 py-2 rounded-lg w-full md:w-56 gap-3 flex justify-center items-center"
              >
                <div>
                  <IoMdInformationCircleOutline />
                </div>
                <span>More Info</span>
              </div>
            </div>
          </div>
        )}

        {/* More info view */}
        {showMoreInfo && ( // Conditionally render More Info based on state
          <div className="px-4 md:px-16 flex flex-col gap-4 pb-10">
            <div className="flex justify-between items-center">
              <p className="text-white text-md">
                More To Explore: Chayaning Eka Putri
              </p>
              <div className="mt-4">
                <button
                  className="bg-slate-500 text-white rounded"
                  onClick={() => setShowMoreInfo(false)} // Back button to hide more info
                >
                  <IoClose size={30} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {" "}
              {/* Use grid for layout */}
              <img
                src={backgroundImg}
                alt="img-1"
                className="rounded-lg h-auto"
              />
              <img src={img1} alt="img-2" className="rounded-lg h-auto" />
              <img src={img2} alt="img-3" className="rounded-lg h-auto" />
              <img src={img3} alt="img-4" className="rounded-lg h-auto" />
              <img
                src={img4}
                alt="img-5"
                className="rounded-lg h-auto"
              />
              <img
                src={img5}
                alt="img-6"
                className="rounded-lg h-auto"
              />
              <img
                src={img6}
                alt="img-7"
                className="rounded-lg h-auto"
              />
              <img
                src={img7}
                alt="img-8"
                className="rounded-lg h-auto"
              />
              <img
                src={img8}
                alt="img-9"
                className="rounded-lg h-auto"
              />
              <img
                src={img9}
                alt="img-10"
                className="rounded-lg h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

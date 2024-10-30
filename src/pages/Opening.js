import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoNetflix from "../assets/logo-netflix/NetflixLogo.png";
import backgroundImg from "../assets/images-mylove/sayang-1.png";
import musicFile from "../assets/sound/The 1975 - About You (Official).mp3"; // Make sure to import your music file

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Opening = () => {
  const audioRef = useRef(new Audio(musicFile)); // Create a ref for the audio element

  useEffect(() => {
    // Set title to "Birthday MyLove" when this component loads
    document.title = "Birthday MyLove";
  }, []); // Empty dependency array ensures this runs only on mount

  const handleOpenClick = () => {
    audioRef.current.play(); // Play the audio
    // You can add a delay here if needed to ensure the music plays before navigating
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div className="bg-black bg-opacity-70 h-screen">
          <div className="flex justify-between px-10 items-center">
            <div className="w-32 h-24 flex justify-center items-center">
              <img src={LogoNetflix} alt="logo netflix" />
            </div>
            <Link
              to="/Home"
              onClick={handleOpenClick} // Add click handler here
              className="cursor-pointer bg-red-700 px-7 py-2 rounded-lg text-white hover:bg-red-600"
            >
              <span>Open</span>
            </Link>
          </div>

          <div data-aos="fade-up" className="flex flex-col gap-10 justify-center items-center md:pt-72 pt-48 w-full p-5">
            <div className="text-center text-white flex flex-col gap-2">
              <p className="text-5xl font-bold">
                Unlimited Romance, Love, and more.
              </p>
              <p className="text-xl font-semibold">
                Watch anywhere, Love everyday.
              </p>
              <p className="text-sm opacity-80">
                Ready to watch? klik open to watch anymore Love.
              </p>
            </div>
            <Link
              to="/Home"
              onClick={handleOpenClick} // Add click handler here as well
              className="cursor-pointer bg-red-700 px-7 py-2 rounded-lg text-white hover:bg-red-600"
            >
              <span>Open</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Opening;

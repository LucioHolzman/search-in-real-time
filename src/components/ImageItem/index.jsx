import React, { useState } from "react";

const ImageItem = ({ image }) => {
  const [popUp, setPopUp] = useState(false);

  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  const cardRotate = (e) => {
    setXAxis((window.innerWidth / 2 - e.clientX) / 10);
    setYAxis((window.innerHeight / 2 - e.clientY) / 10);
  };

  const customPopUp =
    "transition-all relative z-10 w-96 h-96 object-cover focus:outline-none";
  const defaultImages =
    "rounded-md w-80 m-2 transition object-cover h-80 focus:outline-none";
  const backgroundPopUp =
    " top-0 flex justify-center items-center fixed z-40 bg-opacity-75 bg-gray-500 w-screen h-screen";
  const popUpImage =
    "transition flex justify-center rounded-md w-96 object-cover h-96";
  const popUpDownload =
    "transition absolute bottom-1 right-1 z-20 bg-black rounded bg-opacity-50";


  const perspectiveCard = { perspective: "2500px", transformStyle: "preserve-3d" }

  const transformCard = {
    transform: `${
      popUp && window.innerWidth > 800
        ? "translateZ(650px) rotateY(" +
          xAxis +
          "deg) rotateX(" +
          yAxis +
          "deg)"
        : "scaleZ(3.0) rotateY(0deg) rotateX(0deg)"
    } `,
    transition: `${!popUp && "transform .5s ease,width .5s ease"}`,
  };
  
  return (
    <div
      style={perspectiveCard}
      onMouseMove={popUp ? (e) => cardRotate(e) : () => {}}
      className={popUp && window.innerWidth > 800 ? backgroundPopUp : "flex justify-center"}
    >
      <button
        style={transformCard}
        key={image.id}
        className={popUp && window.innerWidth > 800 ? customPopUp : defaultImages}
        onBlur={() =>
          setTimeout(() => {
            setPopUp(false);
          }, 100)
        }
        onFocus={() => setPopUp(image.id)}
      >
        <img
          src={image.webformatURL}
          className={popUp && window.innerWidth > 800 ? popUpImage : defaultImages}
          alt={image.tags}
        />
        {popUp && window.innerWidth > 800 ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={image.pageURL}
            className={popUp && window.innerWidth > 800 ? popUpDownload : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        ) : (
          <a
            target="_blank"
            rel="noreferrer"
            href={image.pageURL}
            className={popUp && window.innerWidth < 800 ? popUpDownload : ""}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        )}
      </button>
    </div>
  );
};

export default ImageItem;

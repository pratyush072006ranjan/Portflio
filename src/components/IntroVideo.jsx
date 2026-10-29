
import React, { useEffect, useRef, useState } from "react";

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const videoRef = useRef(null);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Start video with sound after user interaction
  const startVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = false;
      video.volume = 1;

      await video.play();

      setHasStarted(true);
    } catch (error) {
      console.error("Unable to play video with sound:", error);
    }
  };

  // Close video and reveal portfolio
  const closeIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] h-screen w-screen overflow-hidden bg-black">

      {/* Full-screen video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        preload="auto"
        onEnded={closeIntro}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      {/* Start with sound */}
      {!hasStarted && (
        <button
          type="button"
          onClick={startVideo}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/30"
          aria-label="Play introduction video with sound"
        >
          <span className="rounded-full border border-white/40 bg-black/60 px-8 py-4 text-lg font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-black">
            ▶ Play Introduction
          </span>
        </button>
      )}

      {/* Skip button */}
      <button
        type="button"
        onClick={closeIntro}
        className="absolute right-6 top-6 z-20 rounded-full bg-black/60 px-5 py-2.5 text-sm text-white backdrop-blur-sm transition hover:bg-black/80"
      >
        Skip ✕
      </button>

    </div>
  );
};

export default IntroVideo;


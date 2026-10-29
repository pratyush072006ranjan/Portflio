
import React, { useEffect, useRef, useState } from 'react';
import { slides } from '../constants/index.js';
import Button from '../components/Button.jsx';

const SLIDE_DURATION = 5000;

const ShowcaseSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const elapsedRef = useRef(0);
  const currentRef = useRef(0);
  const pausedRef = useRef(false);

  // Keep the current slide synchronized with animation callbacks.
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Reset the progress when selecting another slide.
  const resetProgress = () => {
    elapsedRef.current = 0;
    startTimeRef.current = null;

    if (progressRef.current) {
      progressRef.current.style.transform = 'scaleX(0)';
    }
  };

  const goToSlide = (index) => {
    const nextIndex = (index + slides.length) % slides.length;

    currentRef.current = nextIndex;
    setCurrent(nextIndex);
    resetProgress();
  };

  const nextSlide = () => {
    goToSlide(currentRef.current + 1);
  };

  const previousSlide = () => {
    goToSlide(currentRef.current - 1);
  };

  const togglePlayback = () => {
    const nextPaused = !pausedRef.current;

    // Save elapsed time before pausing.
    if (nextPaused && startTimeRef.current !== null) {
      elapsedRef.current += performance.now() - startTimeRef.current;
      startTimeRef.current = null;
    }

    pausedRef.current = nextPaused;
    setPaused(nextPaused);
  };

  // Smooth timeline animation and automatic slide transitions.
  useEffect(() => {
    if (slides.length <= 1) return;

    let frameId;

    const animate = (timestamp) => {
      if (pausedRef.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed =
        elapsedRef.current + (timestamp - startTimeRef.current);

      const progress = Math.min(elapsed / SLIDE_DURATION, 1);

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (progress >= 1) {
        elapsedRef.current = 0;
        startTimeRef.current = null;

        const nextIndex = (currentRef.current + 1) % slides.length;

        currentRef.current = nextIndex;
        setCurrent(nextIndex);

        frameId = requestAnimationFrame(animate);
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  // Reset elapsed time when playback resumes.
  useEffect(() => {
    if (!paused) {
      startTimeRef.current = null;
    }
  }, [paused]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <section
    id='work'
      className="
        relative isolate my-16
        grid h-[32rem] min-h-[32rem] max-h-[32rem]
        w-full min-w-0
        grid-cols-1
        overflow-hidden
        border-2 border-gray-900
        bg-zinc-800
        md:grid-cols-[45%_55%] mb-60
      "
    >


{/* LEFT: HERO CONTENT */}
<header
  className="
    relative z-10
    flex h-full min-h-0 min-w-0 w-full
    flex-col justify-center
    overflow-hidden
    bg-zinc-800
    px-6 sm:px-8 lg:px-10 xl:px-12
  "
>
  <div className="flex w-full min-w-0 flex-col">
    {/* HEADING */}
    <div className="showcase-text">
      <h1 key={`title-${current}`} className="showcase-heading ">
        {slide.title}
      </h1>

      <h1 key={`highlight-${current}`} className="showcase-heading text-3xl my-2 text-gray-300">
        {slide.highlight}
      </h1>
    </div>

    {/* DESCRIPTION */}
    <div className="showcase-description my-10 -translate-y-3">
      <p>{slide.description}</p>
    </div>

    {/* BUTTON */}
    <div className='flex flex-row '>
    <div className="showcase-button ">
<div className="showcase-button">
  {/* SEE MY WORK */}
      <Button
        text={slide.primaryText}
        href={slide.primaryLink}
        external={true}
        className="
          h-12 w-50 max-w-full
          -translate-x-6
          rounded-bl-none
          sm:h-14
          md:h-16 md:w-60 mx-10
        "
      />

      {/* VIEW ON GITHUB */}
      <Button
        text={slide.secondaryText}
        href={slide.secondaryLink}
        external={true}
        className="
          h-12 w-50 max-w-full
          translate-x-6
          rounded-bl-none
          sm:h-14
          md:h-16 md:w-60
          github-blue-button
        "
      />
    </div>
    </div>

    </div>
  </div>
</header>



      {/* RIGHT: FIXED IMAGE CONTAINER */}
      <div className="relative h-full min-h-0 min-w-0 w-full overflow-hidden bg-black">
        <img
          key={`image-${current}`}
          src={slide.image || '/images/MovieMania.png'}
          alt={slide.title || 'Featured project'}
          className="
            absolute inset-0 block
            h-full w-full
            object-cover object-center
            opacity-90
          "
        />
      </div>

      {/* PREVIOUS SLIDE */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute left-4 top-1/2 z-20
          flex h-11 w-11 -translate-y-1/2
          items-center justify-center
          rounded-full border border-white/60
          bg-black/40 text-xl text-white
          transition-colors hover:bg-black/70
        "
      >
        ‹
      </button>

      {/* NEXT SLIDE */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute right-4 top-1/2 z-20
          flex h-11 w-11 -translate-y-1/2
          items-center justify-center
          rounded-full border border-white/60
          bg-black/40 text-xl text-white
          transition-colors hover:bg-black/70
        "
      >
        ›
      </button>

      {/* TIMELINE + PLAY/PAUSE CONTROLS */}
      <div
        className="
          absolute bottom-5 left-[45%] z-30
          flex -translate-x-1/2 items-center gap-3
          rounded-full border border-white/10
          bg-black/60 px-3 py-2
          backdrop-blur-md
        "
      >
        {/* SLIDE INDICATORS */}
        <div className="flex items-center gap-2">
          {slides.map((item, index) => {
            const isActive = current === index;

            return (
              <button
                key={item.image ?? index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? 'true' : undefined}
                className={`
                  relative shrink-0 overflow-hidden rounded-full
                  transition-[width,background-color] duration-300 ease-out
                  ${
                    isActive
                      ? 'h-2.5 w-12 bg-white/30'
                      : 'h-2.5 w-2.5 bg-white/60 hover:bg-white'
                  }
                `}
              >
                {isActive && (
                  <span
                    key={`progress-${current}`}
                    ref={progressRef}
                    className="
                      absolute inset-0
                      rounded-full bg-white
                    "
                    style={{
                      transform: 'scaleX(0)',
                      transformOrigin: 'left center',
                      willChange: 'transform',
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* PLAY / PAUSE */}
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          aria-pressed={paused}
          className="
            flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-full text-white
            transition-colors hover:bg-white/20
          "
        >
          {paused ? (
            /* PLAY ICON */
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M8 5.5a1 1 0 0 1 1.52-.85l10 6.5a1 1 0 0 1 0 1.7l-10 6.5A1 1 0 0 1 8 18.5z" />
            </svg>
          ) : (
            /* PAUSE ICON */
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M7 5a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2Zm10 0a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0V7a2 2 0 0 1 2-2Z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default ShowcaseSection;

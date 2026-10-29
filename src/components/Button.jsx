
import React from "react";

const Button = ({
  text,
  className = "",
  id,
  href,
  external = false,
}) => {
  const handleClick = (e) => {
    // External or custom links use their normal navigation behavior.
    if (href) return;

    // Preserve the existing counter scroll behavior.
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href={href || `#${id}`}
      id={id || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${className} cta-wrapper`}
      onClick={handleClick}
    >
      <div className="cta-button group">
        <div className="bg-circle"></div>

        <p className="text -translate-x-5">{text}</p>

        <div className="arrow-wrapper -translate-x-1">
          <img
            src="/images/arrow-down.svg"
            alt=""
            className="-rotate-90"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Terms & Conditions */}
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-10">

          {/* GitHub Icon */}
          <a
  href="https://github.com/pratyush072006ranjan"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub Profile"
  className="text-white transition-transform duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.02c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.72 2.14 3.07 1.63.1-.72.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
</a>

{/* LinkedIn Icon - Blue */}
<a
  href="https://www.linkedin.com/in/pratyush-ranjan-20936a326/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn Profile"
  className="text-[#0A66C2] transition-transform duration-300 hover:scale-110"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.01 18.5H5.02V9h2.99v9.5ZM6.51 7.7a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM19 18.5h-2.98v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.72V9h2.86v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v5.16Z" />
  </svg>
</a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pratyush Ranjan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
# Pratyush Ranjan --- Developer Portfolio

A modern, dark-themed developer portfolio built with **Next.js**,
**React**, **Tailwind CSS**, and **GSAP**. It showcases my projects,
technical skills, development journey, and contact information through
an interactive, animation-focused experience.

## ✨ Features

-   **Interactive hero section** --- introduces me as an aspiring
    Software Developer and features a 3D-style developer scene.
-   **Animated project showcase** --- presents projects with
    descriptions, visuals, and links to explore the work or view the
    source code.
-   **Animated technology icons** --- a horizontally moving row of
    technology icons highlights the tools and technologies I use.
-   **Development journey timeline** --- reveals journey content
    progressively as visitors scroll, combining text and visuals.
-   **Skills and contribution section** --- presents key development
    areas and the skills I can bring to a team.
-   **3D contact scene** --- adds a 3D-style workspace visual to the
    contact section.
-   **Contact form with EmailJS** --- lets visitors send a message
    through the portfolio contact form.
-   **Responsive layout** --- designed to provide a consistent
    experience across desktop, tablet, and mobile screens.
-   **Navigation and calls to action** --- quick access to portfolio
    sections, resume, projects, and contact information.

## 🧰 Tech Stack

  Technology         Purpose
  ------------------ -------------------------------------------------
  Next.js            React framework and application structure
  React              Component-based user interface
  Tailwind CSS       Styling and responsive layouts
  GSAP               Scroll-based effects and UI animations
  EmailJS            Sending contact-form messages from the frontend
  JavaScript / JSX   Application logic and UI components

> Add any other libraries you use for 3D rendering or icons to this list
> so the stack accurately reflects the project.

## 📂 Main Sections

1.  **Hero** --- introduction, primary call to action, and developer
    visual.
2.  **Highlights** --- academic and portfolio statistics.
3.  **Projects** --- featured projects, descriptions, and project links.
4.  **Tech Stack** --- animated technology icons.
5.  **Development Journey** --- learning milestones and technologies
    explored over time.
6.  **Skills** --- key development areas and technical strengths.
7.  **Contact** --- contact form and 3D-style workspace visual.
8.  **Footer** --- copyright and social profile links.

## 🚀 Getting Started

### Prerequisites

-   Node.js (use a version supported by your installed Next.js version)
-   npm, pnpm, or yarn
-   Git

### 1. Clone the repository

``` bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

Replace the repository URL and folder name with your actual GitHub
repository details.

### 2. Install dependencies

If the project uses npm:

``` bash
npm install
```

### 3. Configure environment variables

If your EmailJS configuration is read from environment variables, create
a `.env.local` file in the project root and add the variable names
expected by your code. For example:

``` env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Use these names only if they match the names referenced in your
implementation. If your code uses different names, update `.env.local`
accordingly.

**Important:** Never commit real credentials or private keys to GitHub.
Keep `.env.local` out of version control and add it to `.gitignore`.
EmailJS browser-side public keys are intended for client-side use, but
configure EmailJS restrictions and spam protection where available.

### 4. Start the development server

``` bash
npm run dev
```

Open <http://localhost:3000> in your browser.

### 5. Create a production build

``` bash
npm run build
npm run start
```

## ✉️ EmailJS Setup

To enable the contact form:

1.  Create or sign in to an EmailJS account.
2.  Configure an email service and an email template.
3.  Copy the required service ID, template ID, and public key into your
    local environment configuration.
4.  Confirm that the variable names match those used in your code.
5.  Test the contact form locally before deploying.

Do not display a success message until EmailJS confirms that the message
was sent successfully. Handle errors gracefully so visitors know if
submission fails.

## 🌐 Deployment

This project can be deployed to a platform that supports Next.js, such
as Vercel.

1.  Push the project to GitHub.
2.  Import the repository into your deployment provider.
3.  Add the required EmailJS environment variables in the project's
    deployment settings.
4.  Deploy the project and test the live site.
5.  Verify navigation, project links, animations, responsive layouts,
    and contact-form delivery.

For production deployment, make sure all asset paths work correctly and
that the production build completes without errors.

## 🖼️ Screenshots

Add screenshots of the portfolio to your repository (for example, in a
`public/screenshots/` folder) and reference them here:

``` md
![Portfolio hero](public/screenshots/hero.png)
![Projects section](public/screenshots/projects.png)
![Development journey](public/screenshots/journey.png)
![Skills section](public/screenshots/skills.png)
![Contact section](public/screenshots/contact.png)
```

Update the paths to match the screenshots you commit to the repository.

## 🔧 Customization

-   Update the introduction and profile details in the hero section.
-   Replace project descriptions, preview images, GitHub links, and
    live-demo links with your own.
-   Keep resume and social-profile URLs current.
-   Update the journey timeline and skills to reflect your actual
    experience.
-   Configure EmailJS using your own service and template.
-   Check animations and spacing at mobile, tablet, and desktop widths.

## 📌 Before Publishing

-   [ ] Replace all placeholder GitHub and repository URLs.
-   [ ] Add the correct resume link.
-   [ ] Verify every project and social link.
-   [ ] Configure EmailJS environment variables in the deployment
    platform.
-   [ ] Confirm `.env.local` is ignored by Git.
-   [ ] Add screenshots to the repository and update the paths above.
-   [ ] Run `npm run build` and fix any errors.
-   [ ] Test the contact form on the deployed website.
-   [ ] Check accessibility, keyboard navigation, and mobile
    responsiveness.

## 👨‍💻 About Me

I'm **Pratyush Ranjan**, an aspiring Software Developer and
pre-final-year engineering student at **Guru Ghasidas Vishwavidyalaya**.
I enjoy building web applications, exploring emerging technologies, and
creating interactive digital experiences.

## 📬 Connect

-   **GitHub:** `https://github.com/YOUR_GITHUB_USERNAME`
-   **LinkedIn:** `https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/`

Replace these placeholders with your actual profile URLs.

------------------------------------------------------------------------

Built with curiosity, creativity, and code by **Pratyush Ranjan**.

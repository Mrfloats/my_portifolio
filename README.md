# Obey Kuyangamara — Software Engineering Portfolio

A modern, responsive, high-performance portfolio web application built with **React.js**, **Vite**, and **Vanilla CSS**. Engineered specifically for **Obey Kuyangamara**, 3rd Year Software Engineering Student at **Harare Institute of Technology (HIT)** seeking an industrial attachment.

---

## 🚀 Features

- **React 19 & Vite 8**: Blazing fast development server and optimized static production bundle.
- **Editorial Teal & Amber Design System**: Clean, elegant typography with *Bricolage Grotesque*, *Instrument Sans*, and *JetBrains Mono*.
- **Dark & Light Mode**: Smooth theme toggling with automatic system preference detection and `localStorage` persistence.
- **Interactive Project Showcase**: Filterable portfolio projects across Web, Mobile (Flutter), and Systems/Backend.
- **Interactive Skills Grid**: Categorized tech stacks with proficiency levels and keyword chips.
- **Academic & Coursework Timeline**: Highlighting B.Tech (Hons) Software Engineering at Harare Institute of Technology.
- **Recruiter & Attachment Quick Connect**: One-click email copy, direct phone dial, and pre-formatted mail drafts.
- **Toast Notifications**: Interactive feedback for user actions.
- **Render Ready**: Complete `render.yaml` configuration for 1-click deployments to Render.

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Dev Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to preview the site with instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
The optimized static build files will be placed in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 How to Deploy to Render (Step-by-Step)

You can deploy this portfolio on [Render](https://render.com) for free in just a few minutes using either method below:

### Method 1: Using the Render Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initialize React portfolio for Obey Kuyangamara"
   git branch -M main
   git remote add origin https://github.com/Mrfloats/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

2. **Log in to Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com) and sign in with your GitHub account.

3. **Create a New Static Site**:
   - Click **"New +"** in the top navigation and select **"Static Site"**.
   - Select your GitHub repository (`my_portifolio` or chosen repo name).

4. **Configure Settings**:
   - **Name**: `obey-portfolio` (or your preferred name)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

5. **Deploy**:
   - Click **"Create Static Site"**.
   - Render will automatically clone the repo, install dependencies, run `npm run build`, and publish your site with a free `onrender.com` SSL domain. Every time you push changes to `main`, Render will automatically rebuild and deploy!

---

### Method 2: Using the Included `render.yaml` Blueprint

1. Push this repository to GitHub.
2. In Render, click **"New +"** -> **"Blueprint"**.
3. Select this repository.
4. Render will detect `render.yaml` and configure the static site, build commands, and single-page routing automatically.

---

## 📂 Project Structure

```text
my_portifolio/
├── dist/                      # Production build output
├── public/                    # Static assets & favicon
├── src/
│   ├── components/            # Modular React components
│   │   ├── AboutSection.jsx   # Bio, strengths, and languages
│   │   ├── AttachmentBanner.jsx # Industrial attachment callout
│   │   ├── ContactSection.jsx # Channels and interactive email composer
│   │   ├── EducationSection.jsx # HIT academic timeline and courses
│   │   ├── Footer.jsx         # Bottom credits and quick links
│   │   ├── Hero.jsx           # Editorial hero with monogram graphic
│   │   ├── Icons.jsx          # SVG Icon definitions
│   │   ├── Navbar.jsx         # Sticky header with theme toggle
│   │   ├── ProjectsSection.jsx # Filterable projects grid
│   │   ├── SkillsSection.jsx  # Filterable skill cards
│   │   └── Toast.jsx          # Floating notification banner
│   ├── data/
│   │   └── portfolioData.js   # Centralized portfolio data
│   ├── App.jsx                # Main application component & theme state
│   ├── index.css              # Custom CSS design system tokens
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell with Google Fonts & metadata
├── package.json               # Node dependencies & npm scripts
├── render.yaml                # Render Static Site Infrastructure config
└── vite.config.js             # Vite configuration
```

---

## 📬 Contact Information

- **Name**: Obey Kuyangamara
- **Degree**: B.Tech (Honours) Software Engineering, Harare Institute of Technology (3rd Year)
- **Email**: [kuyangamaraobeykayz@gmail.com](mailto:kuyangamaraobeykayz@gmail.com)
- **Phone**: [+263 78 033 6088](tel:+263780336088)
- **GitHub**: [github.com/Mrfloats](https://github.com/Mrfloats)
- **Location**: Harare, Zimbabwe
